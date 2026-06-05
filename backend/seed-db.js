/**
 * Database Seed Script
 * Inserts sample data into portfolio_db collections
 * 
 * Usage:
 * 1. Ensure .env file is configured with correct MongoDB URI
 * 2. Run: node seed-db.js
 */

import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "./db/models/Project.js";
import Skill from "./db/models/Skill.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...\n");

    // Connect to MongoDB
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not defined in .env");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB\n");

    // Clear existing data
    console.log("🗑️  Clearing existing collections...");
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log("✅ Collections cleared\n");

    // Sample Projects Data
    const sampleProjects = [
      {
        title: "Private Family Social Media Platform",
        description:
          "A secure private social networking platform designed exclusively for families. Features family timeline, member profiles, photo sharing, and interactive engagement (likes, comments, reactions) to preserve family memories.",
        link: "https://athira-351.github.io/private_family_group_profile/",
        thumbnail_image: null,
      },
      {
        title: "E-Commerce Dashboard",
        description:
          "Full-stack e-commerce platform with real-time inventory management, payment gateway integration, and analytics dashboard. Built with React, Node.js, and MongoDB for scalability.",
        link: "https://github.com/example/ecommerce-dashboard",
        thumbnail_image: null,
      },
      {
        title: "AI Chat Application",
        description:
          "Intelligent chatbot application powered by machine learning. Features natural language processing, context awareness, and multi-user support for seamless conversations.",
        link: "https://github.com/example/ai-chat-app",
        thumbnail_image: null,
      },
      {
        title: "Task Management System",
        description:
          "Collaborative task management tool with real-time updates, team collaboration features, and priority management. Includes Kanban board visualization and deadline tracking.",
        link: "https://github.com/example/task-manager",
        thumbnail_image: null,
      },
    ];

    // Sample Skills Data
    const sampleSkills = [
      {
        name: "JavaScript",
        proficiency: "Advanced",
        description:
          "Expert in JavaScript ES6+, async/await, promises, and functional programming. Strong experience with modern frameworks.",
        icon: null,
      },
      {
        name: "React",
        proficiency: "Advanced",
        description:
          "Proficient in building scalable React applications with hooks, context API, and state management using Redux.",
        icon: null,
      },
      {
        name: "Node.js",
        proficiency: "Advanced",
        description:
          "Full-stack JavaScript with Node.js. Experience with Express.js, middleware, authentication, and RESTful API design.",
        icon: null,
      },
      {
        name: "MongoDB",
        proficiency: "Advanced",
        description:
          "Experienced with MongoDB, Mongoose, aggregation pipelines, indexing, and database optimization.",
        icon: null,
      },
      {
        name: "TypeScript",
        proficiency: "Intermediate",
        description:
          "Strong TypeScript skills for type-safe development. Used in production applications for better code quality.",
        icon: null,
      },
      {
        name: "Python",
        proficiency: "Intermediate",
        description:
          "Good understanding of Python for scripting, automation, and data processing tasks.",
        icon: null,
      },
      {
        name: "HTML & CSS",
        proficiency: "Advanced",
        description:
          "Semantic HTML5 and advanced CSS including flexbox, grid, animations, and responsive design.",
        icon: null,
      },
      {
        name: "Git & Version Control",
        proficiency: "Advanced",
        description:
          "Proficient with Git, GitHub workflows, branching strategies, and collaborative development practices.",
        icon: null,
      },
      {
        name: "Docker",
        proficiency: "Intermediate",
        description:
          "Experience containerizing applications with Docker and Docker Compose for development and deployment.",
        icon: null,
      },
      {
        name: "AWS",
        proficiency: "Beginner",
        description:
          "Foundational knowledge of AWS services including EC2, S3, and deployment practices.",
        icon: null,
      },
    ];

    // Insert projects
    console.log("📝 Inserting sample projects...");
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${insertedProjects.length} projects\n`);

    // Insert skills
    console.log("🛠️  Inserting sample skills...");
    const insertedSkills = await Skill.insertMany(sampleSkills);
    console.log(`✅ Inserted ${insertedSkills.length} skills\n`);

    // Display summary
    console.log("📊 Database Seeding Summary:");
    console.log("=============================");
    console.log(`Projects: ${insertedProjects.length}`);
    console.log(`Skills: ${insertedSkills.length}`);
    console.log("\n✨ Seeding completed successfully!\n");

    // Display sample data
    console.log("📋 Sample Project:");
    console.log(JSON.stringify(insertedProjects[0], null, 2));
    console.log("\n📋 Sample Skill:");
    console.log(JSON.stringify(insertedSkills[0], null, 2));

    await mongoose.connection.close();
    console.log("\n👋 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Seeding Error:", error.message);
    process.exit(1);
  }
};

seedDatabase();
