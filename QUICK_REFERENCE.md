# MongoDB Integration - Quick Reference Guide

## 🚀 Quick Start (5 Minutes)

### 1. Create `.env` File
```env
MONGODB_URI=mongodb+srv://athira351:PASSWORD@cluster0.1apkgzv.mongodb.net/portfolio_db?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=5242880
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```

### 3. Seed Data
```bash
node seed-db.js
```

### 4. Frontend
```bash
cd frontend
npm install
npm run dev
```

**Done! ✅**

---

## 🔗 Important URLs

| Service | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:5173 | Check app |
| Backend API | http://localhost:5000/api | Check health |
| Health Check | http://localhost:5000/api/health | Test backend |
| MongoDB Atlas | https://cloud.mongodb.com | Manage database |
| MongoDB Compass | localhost:27017 | Desktop GUI (optional) |

---

## 📡 API Endpoints

### Projects
```
GET    /api/projects              # Get all
POST   /api/projects              # Create (multipart/form-data)
GET    /api/projects/:id          # Get single
PUT    /api/projects/:id          # Update
DELETE /api/projects/:id          # Delete
```

### Skills
```
GET    /api/skills                # Get all
POST   /api/skills                # Create (multipart/form-data)
GET    /api/skills/:id            # Get single
PUT    /api/skills/:id            # Update
DELETE /api/skills/:id            # Delete
```

### Status
```
GET    /api/health                # Server status
```

---

## 💻 Frontend API Usage

### Using API Client

```javascript
import { apiClient } from './api/client.js';

// Get all projects
const projects = await apiClient.projects.getAll();

// Get single project
const project = await apiClient.projects.getById(id);

// Create project
const newProject = await apiClient.projects.create({
  title: 'My Project',
  description: 'Description',
  link: 'https://github.com/...',
  file: fileObject // optional
});

// Update project
await apiClient.projects.update(id, {
  title: 'Updated',
  description: 'New desc',
  link: 'https://...'
});

// Delete project
await apiClient.projects.delete(id);

// Same methods for skills: apiClient.skills.*
```

### Using React Hooks

```javascript
import { useProjects, useCreateProject } from './hooks/usePortfolioData.js';

// In component
const { projects, loading, error, refetch } = useProjects();
const { createProject, loading: creating } = useCreateProject();

// Create and refresh
const handleCreate = async (data) => {
  await createProject(data);
  refetch();
};
```

---

## 📊 Database Schema at a Glance

### projects Collection
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  link: String (required, valid URL),
  thumbnail_image: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### skills Collection
```javascript
{
  _id: ObjectId,
  name: String (required, unique),
  proficiency: String (Beginner/Intermediate/Advanced/Expert),
  description: String,
  icon: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🧪 Test Commands

### Check Backend
```bash
curl http://localhost:5000/api/health
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -F "title=My Project" \
  -F "description=Description" \
  -F "link=https://github.com/example"
```

### Create Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -F "name=JavaScript" \
  -F "proficiency=Advanced" \
  -F "description=My JS experience"
```

### Delete Project
```bash
curl -X DELETE http://localhost:5000/api/projects/{id}
```

### Inspect Database
```bash
node check-db.js
```

---

## 🔧 Useful Scripts

### Seed Sample Data
```bash
cd backend
node seed-db.js
```

### Check Database
```bash
cd backend
node check-db.js
```

### Restart Backend
```bash
# Stop: Ctrl+C
# Start:
npm run dev
```

---

## 📁 Key Files Location

| What | Where |
|------|-------|
| Environment Config | `backend/.env` |
| MongoDB Connection | `backend/db/connection.js` |
| Project Model | `backend/db/models/Project.js` |
| Skill Model | `backend/db/models/Skill.js` |
| API Endpoints | `backend/server.js` |
| Sample Data | `backend/seed-db.js` |
| API Client | `frontend/src/api/client.js` |
| React Hooks | `frontend/src/hooks/usePortfolioData.js` |

---

## 🔍 Debugging Tips

### Backend Issues

```bash
# Check if port is in use
netstat -ano | findstr :5000  # Windows
lsof -i :5000                  # Mac/Linux

# Check MongoDB connection
node check-db.js

# Check all dependencies installed
npm list
```

### Frontend Issues

```javascript
// In browser console
// Test API connection
fetch('http://localhost:5000/api/projects')
  .then(r => r.json())
  .then(d => console.log(d))

// Check environment
console.log(process.env.REACT_APP_API_URL)
```

### Database Issues

1. Check MongoDB Atlas login
2. Verify IP is whitelisted
3. Verify password in connection string
4. Check cluster is running (not paused)
5. Test with `node check-db.js`

---

## ⚠️ Common Errors & Fixes

| Error | Solution |
|-------|----------|
| "CORS error" | Check `FRONTEND_URL` in `.env`, restart backend |
| "Cannot find module" | Run `npm install` in that folder |
| "Port 5000 in use" | Change PORT in `.env` or kill process |
| "MongoDB connection failed" | Check password, IP whitelist, cluster status |
| "Validation error" | Verify all required fields provided |
| "Duplicate key error" | Skill name must be unique |
| "File too large" | Max 5MB, adjust `MAX_FILE_SIZE` in `.env` |

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `SETUP_GUIDE.md` | Complete setup (this is best to start) |
| `INTEGRATION_GUIDE.md` | Backend/frontend architecture |
| `DATABASE_SCHEMA.md` | Detailed schema documentation |
| `FRONTEND_INTEGRATION.md` | React examples and hooks |
| `MONGODB_INTEGRATION_CHECKLIST.md` | Comprehensive checklist |
| `MONGODB_SETUP.md` | Production deployment |

---

## 🚀 Deployment Quick Links

- **Backend Hosting:** Render.com, Railway
- **Frontend Hosting:** Vercel, Netlify
- **Database:** MongoDB Atlas (already using)

See `MONGODB_SETUP.md` for detailed deployment steps.

---

## 🎯 Project Structure

```
portfolio/
├── backend/                    # Node.js/Express server
│   ├── db/
│   │   ├── connection.js      # MongoDB connection
│   │   └── models/            # Mongoose schemas
│   │       ├── Project.js
│   │       └── Skill.js
│   ├── uploads/               # Uploaded files
│   ├── server.js              # Express app
│   ├── seed-db.js             # Sample data
│   ├── check-db.js            # DB inspector
│   ├── .env                   # Configuration (NOT in git)
│   ├── .gitignore
│   └── package.json
│
├── frontend/                  # React app
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js      # API helper
│   │   ├── hooks/
│   │   │   └── usePortfolioData.js  # React hooks
│   │   ├── components/        # React components
│   │   └── pages/             # Pages
│   ├── .env                   # Config (NOT in git)
│   ├── package.json
│   └── vite.config.js
│
├── MONGODB_INTEGRATION_CHECKLIST.md
├── MONGODB_SETUP.md
└── README.md
```

---

## 💾 Git Commands

```bash
# Exclude environment files
git add .gitignore
git commit -m "Add .gitignore for .env files"

# Check what will be committed
git status

# Push to GitHub
git add .
git commit -m "Integrate MongoDB database"
git push origin main
```

---

## 🆘 When Things Go Wrong

1. **Read the error message carefully** - It usually tells you the problem
2. **Check `.env` file** - Is MongoDB URI correct?
3. **Restart services** - Backend, frontend
4. **Check network** - Can you access mongodb.com?
5. **Verify MongoDB** - Is cluster running?
6. **Run `npm install`** - Fresh dependencies
7. **Clear cache** - Browser F12 → Cache storage

---

## 📞 Support Resources

- **MongoDB Issues:** MongoDB docs + Atlas support
- **Node.js Issues:** Node.js documentation
- **React Issues:** React docs + Stack Overflow
- **CORS Issues:** MDN Web Docs on CORS
- **Our Docs:** All guide files in this repo

---

## ✨ Next Steps After Setup

1. ✅ Verify all systems working (you are here)
2. Build admin dashboard for data management
3. Add more features (authentication, pagination)
4. Style the frontend components
5. Deploy to production
6. Monitor and maintain

---

## 📝 Notes

- MongoDB storage free tier: 512MB
- API requests unlimited
- File uploads in `/uploads` folder
- Max file size configurable
- Sample data included and can be refreshed anytime

---

**Last Updated:** 2024-06-05  
**Status:** ✅ Ready for Use  
**Database:** portfolio_db  
**Collections:** projects, skills
