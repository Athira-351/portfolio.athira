import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import { Sequelize, DataTypes } from "sequelize";
import multer from "multer";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// // DB connection
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
//   dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: true,
//         ca: fs.readFileSync("./ca.pem"),
//       },
//     },
//     logging: false,
// });

// DB connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  dialectOptions: {
    ssl: process.env.DB_SSL === "true" ? {
      ca: fs.readFileSync("./ca.pem"),
    } : false,
  },
  logging: false,
});


// Models
const Project = sequelize.define("Project", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  link: { type: DataTypes.STRING },
  thumbnail_image: { type: DataTypes.STRING },
});

// Sync DB
sequelize.sync({ alter: true }).then(() => console.log("DB synced"));

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});
const upload = multer({ storage });

// ================= Routes =================
//projects
app.get("/api/projects", async (req, res) => {
  try {
    const [projects] = await sequelize.query("SELECT * FROM projects");

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
app.post("/api/projects", upload.single("thumbnail_image"), async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newProject = await Project.create({
      title,
      description,
      link,
      thumbnail_image: thumbnailPath,
    });

    res.json(newProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Failed to add project" });
  }
});

// skills - fetch all
app.get("/api/skills", async (req, res) => {
  try {
    const [skills] = await sequelize.query("SELECT * FROM skills");
    res.json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ error: "Failed to fetch skills" });
  }
});

// skills - add new
app.post("/api/skills", async (req, res) => {
  const { name, proficiency, description } = req.body;
  try {
    const [result] = await sequelize.query(
      `INSERT INTO skills (name, proficiency, description, createdAt, updatedAt)
       VALUES (?, ?, ?, NOW(), NOW())`,
      { replacements: [name, proficiency, description] }
    );
    res.json({ message: "Skill added successfully", result });
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({ error: "Failed to add skill" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
