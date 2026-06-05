# Complete MongoDB Integration Setup Guide

## 🎯 Goal
Integrate MongoDB Atlas (portfolio_db) with both backend and frontend, create collections, and seed sample data.

---

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] MongoDB Atlas account created
- [ ] Cluster created in MongoDB Atlas
- [ ] Database user created with password
- [ ] Your IP whitelisted in Network Access
- [ ] MongoDB Compass connected (optional but helpful)
- [ ] Backend code set up (from previous setup)
- [ ] Node.js installed locally

---

## 🚀 Step-by-Step Setup

### Step 1: Get Your MongoDB Connection String

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click your cluster → **Connect**
3. Choose **Drivers** → **Node.js**
4. Copy the connection string:
   ```
   mongodb+srv://athira351:PASSWORD@cluster0.1apkgzv.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `PASSWORD` with your actual MongoDB password

### Step 2: Update Backend Configuration

#### 2.1 Create `.env` File

In `backend/` folder, create a file named `.env`:

```env
MONGODB_URI=mongodb+srv://athira351:YOUR_PASSWORD@cluster0.1apkgzv.mongodb.net/portfolio_db?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=5242880
```

**Replace `YOUR_PASSWORD`** with your actual MongoDB password.

**Important:** The database name is `portfolio_db` (already in the connection string).

#### 2.2 Verify .gitignore

Ensure `.env` is in `.gitignore` so passwords aren't committed:

```bash
cat backend/.gitignore
```

Should show `.env` in the list.

### Step 3: Install Dependencies

```bash
cd backend
npm install
```

Expected output: All packages installed without errors

### Step 4: Verify Database Connection

Test that your backend can connect to MongoDB:

```bash
npm run dev
```

**Expected output:**
```
✅ MongoDB Connected Successfully
🚀 Backend running on http://localhost:5000
📡 MongoDB connected to: mongodb+srv://...
```

If you see errors, check:
1. Password is correct in `.env`
2. IP is whitelisted in MongoDB Atlas
3. Database user exists
4. Cluster is running (not paused)

### Step 5: Create Collections & Insert Sample Data

Run the seeding script to create collections and insert sample data:

```bash
node seed-db.js
```

**Expected output:**
```
🌱 Starting database seeding...

✅ Connected to MongoDB

🗑️  Clearing existing collections...
✅ Collections cleared

📝 Inserting sample projects...
✅ Inserted 4 projects

🛠️  Inserting sample skills...
✅ Inserted 10 skills

📊 Database Seeding Summary:
=============================
Projects: 4
Skills: 10

✨ Seeding completed successfully!

📋 Sample Project:
{
  "_id": "...",
  "title": "Private Family Social Media Platform",
  "description": "...",
  ...
}

👋 Disconnected from MongoDB
```

### Step 6: Verify Collections in MongoDB

#### Option A: Using MongoDB Compass

1. Open MongoDB Compass
2. Click "Connect"
3. Paste your connection string
4. Click "Connect"
5. Navigate to `portfolio_db` database
6. See `projects` and `skills` collections with data

#### Option B: Using Check Script

```bash
node check-db.js
```

**Expected output:**
```
🔍 Connecting to MongoDB...

✅ Connected!

📊 Found 2 collection(s):

📦 Collection: "projects" (4 documents)
   Sample document:
    {
      "_id": "...",
      "title": "Private Family Social Media Platform",
      "description": "...",
      ...
    }

📦 Collection: "skills" (10 documents)
   Sample document:
    {
      "_id": "...",
      "name": "JavaScript",
      "proficiency": "Advanced",
      "description": "...",
      ...
    }

📈 Database Statistics:
   Total Collections: 2
   Total Size: 45.23 KB
   Total Objects: 14

👋 Disconnected
```

### Step 7: Start Backend Server

Keep the backend running:

```bash
npm run dev
```

Server should be accessible at: `http://localhost:5000`

Test the API:
```bash
curl http://localhost:5000/api/projects
```

Should return JSON array of projects.

### Step 8: Frontend Setup

#### 8.1 Configure Frontend API URL

In your React component files, use:

```javascript
// Recommended: Create a config file
// frontend/src/api/config.js
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

Or directly in fetch calls:
```javascript
const response = await fetch('http://localhost:5000/api/projects');
```

#### 8.2 Example Frontend Code

**Fetch Projects:**
```javascript
import { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.thumbnail_image && (
            <img src={project.thumbnail_image} alt={project.title} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
```

See `INTEGRATION_GUIDE.md` for more examples.

#### 8.3 Start Frontend

```bash
cd frontend
npm run dev
```

Frontend should be accessible at: `http://localhost:5173`

### Step 9: Test Full Integration

#### Test 1: Fetch from Frontend
```javascript
// In your React component or browser console
fetch('http://localhost:5000/api/projects')
  .then(res => res.json())
  .then(data => console.log(data))
```

Should display array of projects.

#### Test 2: Create New Project
```javascript
const formData = new FormData();
formData.append('title', 'My New Project');
formData.append('description', 'Description here');
formData.append('link', 'https://github.com/example/project');

fetch('http://localhost:5000/api/projects', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => console.log('Created:', data))
```

#### Test 3: Create New Skill
```javascript
const formData = new FormData();
formData.append('name', 'Kubernetes');
formData.append('proficiency', 'Intermediate');
formData.append('description', 'Container orchestration');

fetch('http://localhost:5000/api/skills', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => console.log('Created:', data))
```

---

## 📊 Database Schema Summary

### Collections Created

#### projects
```
{
  _id: ObjectId
  title: String (required)
  description: String (required)
  link: String (required, valid URL)
  thumbnail_image: String (optional)
  createdAt: Date
  updatedAt: Date
}
```

**Sample Data:** 4 projects (Web, E-commerce, Chat, Task Manager)

#### skills
```
{
  _id: ObjectId
  name: String (required, unique)
  proficiency: String (Beginner/Intermediate/Advanced/Expert)
  description: String
  icon: String (optional)
  createdAt: Date
  updatedAt: Date
}
```

**Sample Data:** 10 skills (JavaScript, React, Node.js, MongoDB, TypeScript, Python, HTML & CSS, Git, Docker, AWS)

---

## 🔑 Key Files & Their Purpose

| File | Purpose |
|------|---------|
| `.env` | Configuration (MongoDB URI, ports, etc.) |
| `db/connection.js` | MongoDB connection setup |
| `db/models/Project.js` | Project schema definition |
| `db/models/Skill.js` | Skill schema definition |
| `server.js` | Express server with API endpoints |
| `seed-db.js` | Insert sample data |
| `check-db.js` | Inspect database contents |
| `DATABASE_SCHEMA.md` | Detailed schema documentation |
| `INTEGRATION_GUIDE.md` | Frontend/backend integration |

---

## 🧪 API Endpoints Quick Reference

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

### Utility
- `GET /api/health` - Server status

Full documentation in `INTEGRATION_GUIDE.md`

---

## ✅ Verification Checklist

After completing all steps, verify:

- [ ] Backend running: `npm run dev` shows success
- [ ] MongoDB connected: Shows "✅ MongoDB Connected Successfully"
- [ ] Database exists: `portfolio_db` visible in MongoDB Atlas
- [ ] Collections created: `projects` and `skills` have documents
- [ ] Sample data inserted: 4 projects and 10 skills
- [ ] Health check works: `curl http://localhost:5000/api/health`
- [ ] Projects endpoint works: `curl http://localhost:5000/api/projects` returns array
- [ ] Frontend can fetch: Browser console shows projects data
- [ ] Files are organized: All documents in correct folders

---

## 🐛 Troubleshooting

### "MONGODB_URI is not defined"
**Solution:** Create `.env` file in backend folder with your MongoDB URI

### "Cannot connect to MongoDB"
**Solutions:**
1. Check password in connection string
2. Add your IP to MongoDB Atlas Network Access
3. Verify cluster is running (not paused)
4. Check internet connection

### "CORS Error: Access blocked"
**Solution:** 
1. Verify `FRONTEND_URL` in `.env` matches your frontend URL
2. Restart backend server

### "Document validation error"
**Solution:** Ensure all required fields are provided:
- Projects: title, description, link (URL format)
- Skills: name (unique)

### "Port 5000 already in use"
**Solutions:**
1. Change PORT in `.env` to different number
2. Kill process using port: `lsof -ti :5000 | xargs kill -9` (Mac/Linux)

---

## 📚 Additional Resources

- **DATABASE_SCHEMA.md** - Detailed collection schema
- **INTEGRATION_GUIDE.md** - Frontend/backend integration examples
- **MONGODB_SETUP.md** - Production deployment
- **VERIFICATION_CHECKLIST.md** - Complete testing guide

---

## 🚀 Next Steps

### Immediate (Development)
1. ✅ Complete this setup
2. Build admin dashboard for data management
3. Add file upload UI in frontend
4. Test all CRUD operations

### Short-term (Before Deployment)
1. Add authentication/login
2. Add data validation on frontend
3. Set up error handling
4. Performance optimization

### Long-term (Production)
1. Deploy backend to Render/Railway
2. Deploy frontend to Vercel
3. Set up monitoring and logging
4. Regular backups
5. Scale as needed

---

## 📞 Getting Help

If stuck:
1. Check the error message carefully
2. Look up in Troubleshooting section
3. Review relevant documentation file
4. Check MongoDB Atlas dashboard
5. Verify network/firewall settings

---

**You're all set! 🎉 Your MongoDB database is integrated and ready to use!**

Database: `portfolio_db`
Backend: `http://localhost:5000`
Frontend: `http://localhost:5173`
