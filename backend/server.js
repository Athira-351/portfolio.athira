import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import connectDB from "./db/connection.js";
import Project from "./db/models/Project.js";
import Skill from "./db/models/Skill.js";

dotenv.config();

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ================= Middleware =================
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ================= File Upload Setup =================
// Ensure uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: process.env.MAX_FILE_SIZE || 5242880 }, // 5MB default
  fileFilter: (req, file, cb) => {
    // Only allow image files
    const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

// ================= Database Connection =================
connectDB();

// ================= Error Handling Middleware =================
const handleError = (res, error, statusCode = 500, message = "An error occurred") => {
  console.error(`❌ ${message}:`, error.message);
  res.status(statusCode).json({
    success: false,
    error: message,
    details: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
};

// ================= Routes =================

// -------- PROJECTS ENDPOINTS --------

// Get all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    const updatedProjects = projects.map((p) => ({
      ...p.toObject(),
      thumbnail_image: p.thumbnail_image
        ? `${req.protocol}://${req.get("host")}${p.thumbnail_image}`
        : null,
    }));
    res.json(updatedProjects);
  } catch (error) {
    handleError(res, error, 500, "Failed to fetch projects");
  }
});

// Get single project by ID
app.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }
    res.json(project);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }
    handleError(res, error, 500, "Failed to fetch project");
  }
});

// Add new project with file upload
app.post("/api/projects", upload.single("thumbnail_image"), async (req, res) => {
  try {
    const { title, description, link } = req.body;

    // Validation
    if (!title || !description || !link) {
      return res.status(400).json({
        success: false,
        error: "Title, description, and link are required",
      });
    }

    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newProject = new Project({
      title,
      description,
      link,
      thumbnail_image: thumbnailPath,
    });

    await newProject.save();
    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project: newProject,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: "Validation error",
        details: Object.values(error.errors).map((e) => e.message),
      });
    }
    handleError(res, error, 500, "Failed to add project");
  }
});

// Update project
app.put("/api/projects/:id", upload.single("thumbnail_image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, link } = req.body;

    // Validation
    if (!title || !description || !link) {
      return res.status(400).json({
        success: false,
        error: "Title, description, and link are required",
      });
    }

    const updateData = { title, description, link };

    // If new file uploaded, update thumbnail
    if (req.file) {
      updateData.thumbnail_image = `/uploads/${req.file.filename}`;
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    res.json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: "Validation error",
        details: Object.values(error.errors).map((e) => e.message),
      });
    }
    handleError(res, error, 500, "Failed to update project");
  }
});

// Delete project
app.delete("/api/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    // Delete associated thumbnail file if exists
    if (deletedProject.thumbnail_image) {
      const filePath = path.join(__dirname, deletedProject.thumbnail_image);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid project ID",
      });
    }
    handleError(res, error, 500, "Failed to delete project");
  }
});

// -------- SKILLS ENDPOINTS --------

// Get all skills
app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    const updatedSkills = skills.map((s) => ({
      ...s.toObject(),
      icon: s.icon
        ? `${req.protocol}://${req.get("host")}${s.icon}`
        : null,
    }));
    res.json(updatedSkills);
  } catch (error) {
    handleError(res, error, 500, "Failed to fetch skills");
  }
});

// Get single skill by ID
app.get("/api/skills/:id", async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({
        success: false,
        error: "Skill not found",
      });
    }
    res.json(skill);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid skill ID",
      });
    }
    handleError(res, error, 500, "Failed to fetch skill");
  }
});

// Add new skill
app.post("/api/skills", upload.single("icon"), async (req, res) => {
  try {
    const { name, proficiency, description } = req.body;

    // Validation
    if (!name) {
      return res.status(400).json({
        success: false,
        error: "Skill name is required",
      });
    }

    const iconPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newSkill = new Skill({
      name,
      proficiency: proficiency || "",
      description: description || "",
      icon: iconPath,
    });

    await newSkill.save();
    res.status(201).json({
      success: true,
      message: "Skill added successfully",
      skill: newSkill,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: `Skill "${req.body.name}" already exists`,
      });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: "Validation error",
        details: Object.values(error.errors).map((e) => e.message),
      });
    }
    handleError(res, error, 500, "Failed to add skill");
  }
});

// Update skill
app.put("/api/skills/:id", upload.single("icon"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, proficiency, description } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (proficiency) updateData.proficiency = proficiency;
    if (description) updateData.description = description;

    // If new file uploaded, update icon
    if (req.file) {
      updateData.icon = `/uploads/${req.file.filename}`;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        error: "At least one field is required for update",
      });
    }

    const updatedSkill = await Skill.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedSkill) {
      return res.status(404).json({
        success: false,
        error: "Skill not found",
      });
    }

    res.json({
      success: true,
      message: "Skill updated successfully",
      skill: updatedSkill,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: `Skill "${req.body.name}" already exists`,
      });
    }
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid skill ID",
      });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: "Validation error",
        details: Object.values(error.errors).map((e) => e.message),
      });
    }
    handleError(res, error, 500, "Failed to update skill");
  }
});

// Delete skill
app.delete("/api/skills/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({
        success: false,
        error: "Skill not found",
      });
    }

    // Delete associated icon file if exists
    if (deletedSkill.icon) {
      const filePath = path.join(__dirname, deletedSkill.icon);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    res.json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid skill ID",
      });
    }
    handleError(res, error, 500, "Failed to delete skill");
  }
});

// ================= Health Check =================
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// ================= 404 Handler =================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

// ================= Start Server =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📡 MongoDB connected to: ${process.env.MONGODB_URI || "Not configured"}`);
});
