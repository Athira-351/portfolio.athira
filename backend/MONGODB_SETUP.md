# MongoDB Setup Guide for Portfolio

This guide will help you migrate your portfolio from JSON files to MongoDB and host it in the cloud.

## 🚀 Quick Start

### Step 1: Create MongoDB Atlas Account (Free)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Create an organization and project
4. Select **M0 (Free Tier)** cluster
5. Configure security:
   - Create a database user (username & password)
   - Add your IP address to the network access list (or allow all: 0.0.0.0/0)
6. Get your connection string

### Step 2: Connection String Format

After creating your cluster, click **Connect** and copy the connection string:

```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

Replace:
- `username` - Your database user
- `password` - Your database password
- `cluster` - Your cluster name
- `database_name` - Any name (e.g., `portfolio`)

### Step 3: Install Dependencies

```bash
cd backend
npm install
```

This will install:
- **mongoose** - MongoDB driver with schema validation
- **dotenv** - Environment variable management
- **cors** - Cross-origin requests
- **express** - Web framework
- **multer** - File upload handling

### Step 4: Configure Environment Variables

Create a `.env` file in the backend folder:

```bash
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# File Upload Configuration
MAX_FILE_SIZE=5242880  # 5MB in bytes
```

⚠️ **IMPORTANT**: Add `.env` to `.gitignore` to never commit passwords!

### Step 5: Start the Backend

```bash
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Backend running on http://localhost:5000
```

## 📋 API Endpoints (No Changes Needed!)

Your frontend code doesn't need to change! All endpoints remain the same:

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (with file upload)
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create skill (with file upload)
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Health Check
- `GET /api/health` - Server status

## 🔄 Data Migration (Optional)

If you want to migrate existing JSON data to MongoDB:

1. Export your existing projects and skills from JSON files
2. Use MongoDB Atlas UI to import, or:

```javascript
// Create a migration script (optional)
import Project from "./db/models/Project.js";
import Skill from "./db/models/Skill.js";
import fs from "fs";

const projects = JSON.parse(fs.readFileSync("./data/projects.json"));
const skills = JSON.parse(fs.readFileSync("./data/skills.json"));

await Project.insertMany(projects);
await Skill.insertMany(skills);
console.log("Migration complete!");
```

## 🌐 Deploying to Production

### Option 1: Render (Recommended)

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create new Web Service from GitHub
4. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your deployed frontend URL
   - `PORT`: 5000

### Option 2: Railway

1. Go to [Railway](https://railway.app)
2. Connect GitHub repository
3. Add MongoDB service
4. Set environment variables same as above

### Option 3: Vercel (Frontend Only, Backend on Render)

For full-stack deployment, host:
- Frontend on Vercel
- Backend on Render (uses MongoDB Atlas automatically)

## ✅ Validation Checklist

Before going live:

- [ ] MongoDB Atlas account created
- [ ] Database user and IP whitelist configured
- [ ] `.env` file created with correct credentials
- [ ] `.env` added to `.gitignore`
- [ ] `npm install` completed
- [ ] Backend starts without errors (`npm run dev`)
- [ ] Health endpoint works: `curl http://localhost:5000/api/health`
- [ ] Projects endpoint returns data: `curl http://localhost:5000/api/projects`
- [ ] Frontend connects successfully

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- Check `MONGODB_URI` in `.env`
- Verify database user credentials
- Add your IP to MongoDB Atlas Network Access

### "Validation Error"
- Check required fields (title, description, link for projects)
- Verify URL format for project links

### "File upload failed"
- Maximum file size is 5MB (configurable in `MAX_FILE_SIZE`)
- Only image files allowed (jpeg, png, gif, webp)

### "Skill already exists"
- Skill names must be unique
- Modify the name or use a different skill

## 📚 Project Structure

```
backend/
├── db/
│   ├── connection.js          # MongoDB connection setup
│   └── models/
│       ├── Project.js         # Project schema
│       └── Skill.js           # Skill schema
├── uploads/                   # File upload directory
├── server.js                  # Express server (MongoDB queries)
├── package.json               # Dependencies (includes mongoose)
├── .env                       # Environment variables (DON'T COMMIT)
├── .env.example               # Template for .env
└── .gitignore                 # Git ignore file
```

## 🔐 Security Best Practices

1. **Never commit `.env`** - Add to `.gitignore`
2. **Use strong passwords** for MongoDB
3. **Restrict IP access** in MongoDB Atlas
4. **Use HTTPS** in production
5. **Validate all inputs** on the backend
6. **Sanitize file uploads** (already done with MIME type check)
7. **Use environment variables** for all sensitive data

## 📞 Support

For MongoDB issues: [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
For Mongoose issues: [Mongoose Documentation](https://mongoosejs.com/)

---

**Ready to deploy? You've got this! 🚀**
