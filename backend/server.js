import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// JSON Database file paths
const projectsDBPath = path.join(__dirname, "data", "projects.json");
const skillsDBPath = path.join(__dirname, "data", "skills.json");

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, "data"))) {
  fs.mkdirSync(path.join(__dirname, "data"));
}

// Initialize database files if they don't exist
if (!fs.existsSync(projectsDBPath)) {
  fs.writeFileSync(projectsDBPath, JSON.stringify([], null, 2));
}
if (!fs.existsSync(skillsDBPath)) {
  fs.writeFileSync(skillsDBPath, JSON.stringify([], null, 2));
}

// Helper functions for JSON DB
const readProjects = () => {
  try {
    return JSON.parse(fs.readFileSync(projectsDBPath, "utf-8"));
  } catch {
    return [];
  }
};

const writeProjects = (data) => {
  fs.writeFileSync(projectsDBPath, JSON.stringify(data, null, 2));
};

const readSkills = () => {
  try {
    return JSON.parse(fs.readFileSync(skillsDBPath, "utf-8"));
  } catch {
    return [];
  }
};

const writeSkills = (data) => {
  fs.writeFileSync(skillsDBPath, JSON.stringify(data, null, 2));
};

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads/"); // save to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});
const upload = multer({ storage });

// ================= Routes =================
// Get all projects
app.get("/api/projects", (req, res) => {
  try {
    const projects = readProjects();
    const updatedProjects = projects.map((p) => ({
      ...p,
      thumbnail_image: p.thumbnail_image
        ? `${req.protocol}://${req.get("host")}${p.thumbnail_image}`
        : null,
    }));
    res.json(updatedProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Add project with file upload
app.post("/api/projects", upload.single("thumbnail_image"), (req, res) => {
  try {
    const { title, description, link } = req.body;
    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null;

    const projects = readProjects();
    const newProject = {
      id: Date.now(),
      title,
      description,
      link,
      thumbnail_image: thumbnailPath,
      createdAt: new Date().toISOString(),
    };

    projects.push(newProject);
    writeProjects(projects);

    res.json(newProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Failed to add project" });
  }
});

// Get all skills
app.get("/api/skills", (req, res) => {
  try {
    const skills = readSkills();
    res.json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});

// Add new skill
app.post("/api/skills", upload.single("icon"), (req, res) => {
  try {
    const { name, proficiency, description } = req.body;
    const iconPath = req.file ? `/uploads/${req.file.filename}` : null;
    const skills = readSkills();

    const newSkill = {
      id: Date.now(),
      name,
      proficiency,
      description,
      icon: iconPath,
      createdAt: new Date().toISOString(),
    };

    skills.push(newSkill);
    writeSkills(skills);

    res.json({ message: "Skill added successfully", skill: newSkill });
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({ error: "Failed to add skill" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
