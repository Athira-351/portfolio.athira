/**
 * Database Inspector Script
 * Check what's in your MongoDB database
 * 
 * Usage:
 * 1. Update the MongoDB URI below with your actual password
 * 2. Run: node check-db.js
 */

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Use from .env or set manually
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://athira351:PASSWORD@cluster0.1apkgzv.mongodb.net/portfolio_db?retryWrites=true&w=majority";

const inspectDatabase = async () => {
  const client = new MongoClient(MONGODB_URI);

  try {
    console.log("🔍 Connecting to MongoDB...\n");
    await client.connect();
    console.log("✅ Connected!\n");

    // Get database
    const db = client.db("portfolio");
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log(`📊 Found ${collections.length} collection(s):\n`);

    if (collections.length === 0) {
      console.log("⚠️  Database is empty. No collections found.\n");
    } else {
      // For each collection, show count and sample documents
      for (const collection of collections) {
        const collName = collection.name;
        const coll = db.collection(collName);
        
        // Count documents
        const count = await coll.countDocuments();
        console.log(`📦 Collection: "${collName}" (${count} document${count !== 1 ? 's' : ''})`);
        
        if (count > 0) {
          // Get first document as sample
          const sample = await coll.findOne();
          console.log("   Sample document:");
          console.log("   ", JSON.stringify(sample, null, 2));
        }
        console.log();
      }
    }

    // Show database stats
    const stats = await db.stats();
    console.log(`📈 Database Statistics:`);
    console.log(`   Total Collections: ${stats.collections}`);
    console.log(`   Total Size: ${(stats.dataSize / 1024).toFixed(2)} KB`);
    console.log(`   Total Objects: ${stats.objects}`);

  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.message.includes("authentication failed")) {
      console.error("\n⚠️  Authentication failed! Check your:");
      console.error("   - Username (athira351)");
      console.error("   - Password");
      console.error("   - Database name (portfolio)");
      console.error("\nUpdate the MONGODB_URI variable in this script and try again.");
    } else if (error.message.includes("getaddrinfo")) {
      console.error("\n⚠️  Cannot reach MongoDB! Check your:");
      console.error("   - Internet connection");
      console.error("   - IP is whitelisted in MongoDB Atlas");
      console.error("   - Cluster name is correct");
    }
  } finally {
    await client.close();
    console.log("\n👋 Disconnected");
  }
};

inspectDatabase();
