/**
 * Migration Helper Script
 * Use this to migrate data from JSON files to MongoDB
 * 
 * Usage:
 * 1. Make sure MONGODB_URI is set in .env
 * 2. Run: node migrate.js
 */

import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/connection.js";
import Project from "./db/models/Project.js";
import Skill from "./db/models/Skill.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrateData = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Clear existing data (optional - remove if you want to keep existing data)
    console.log("📋 Clearing existing data...");
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Read JSON files
    const projectsPath = path.join(__dirname, "data", "projects.json");
    const skillsPath = path.join(__dirname, "data", "skills.json");

    console.log("📖 Reading JSON files...");
    
    let projects = [];
    let skills = [];

    if (fs.existsSync(projectsPath)) {
      const projectsData = fs.readFileSync(projectsPath, "utf-8");
      projects = JSON.parse(projectsData);
      console.log(`✅ Found ${projects.length} projects`);
    } else {
      console.log("⚠️  projects.json not found");
    }

    if (fs.existsSync(skillsPath)) {
      const skillsData = fs.readFileSync(skillsPath, "utf-8");
      skills = JSON.parse(skillsData);
      console.log(`✅ Found ${skills.length} skills`);
    } else {
      console.log("⚠️  skills.json not found");
    }

    // Migrate projects
    if (projects.length > 0) {
      console.log("📤 Migrating projects to MongoDB...");
      // Remove the old 'id' field as MongoDB uses '_id'
      const projectsToInsert = projects.map(({ id, ...rest }) => ({
        ...rest,
        createdAt: new Date(rest.createdAt || Date.now()),
      }));
      
      const insertedProjects = await Project.insertMany(projectsToInsert);
      console.log(`✅ Migrated ${insertedProjects.length} projects`);
    }

    // Migrate skills
    if (skills.length > 0) {
      console.log("📤 Migrating skills to MongoDB...");
      const skillsToInsert = skills.map(({ id, ...rest }) => ({
        ...rest,
        createdAt: new Date(rest.createdAt || Date.now()),
      }));
      
      const insertedSkills = await Skill.insertMany(skillsToInsert);
      console.log(`✅ Migrated ${insertedSkills.length} skills`);
    }

    console.log("\n✨ Migration completed successfully!");
    console.log("Your data is now in MongoDB!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
};

// Run migration
migrateData();
