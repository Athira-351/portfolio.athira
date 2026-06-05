# Portfolio Backend - MongoDB Edition

A modern Node.js backend with Express and MongoDB for portfolio management with project and skill management.

## 🎯 Features

✅ **MongoDB Integration** - Cloud-hosted data storage with Atlas
✅ **Full CRUD Operations** - Create, Read, Update, Delete projects and skills
✅ **File Upload Support** - Upload and manage project thumbnails and skill icons
✅ **Input Validation** - Schema validation with Mongoose
✅ **Error Handling** - Comprehensive error responses
✅ **CORS Enabled** - Secure cross-origin requests
✅ **Environment Config** - Secure environment variable management

## 📦 Project Structure

```
backend/
├── db/
│   ├── connection.js                 # MongoDB connection
│   └── models/
│       ├── Project.js                # Project schema & model
│       └── Skill.js                  # Skill schema & model
├── uploads/                          # File storage
├── server.js                         # Main Express server
├── migrate.js                        # Data migration script
├── package.json                      # Dependencies
├── .env                              # Environment variables (don't commit!)
├── .env.example                      # Template for .env
├── .gitignore                        # Git ignore rules
├── setup.sh                          # Setup script (Unix/Linux/Mac)
├── setup.bat                         # Setup script (Windows)
├── MONGODB_SETUP.md                  # Detailed MongoDB setup guide
└── README.md                         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- MongoDB Atlas account (free tier available)
- npm or yarn

### Installation

1. **Clone and navigate:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or use the automated setup script:
   - **Windows:** `setup.bat`
   - **Linux/Mac:** `bash setup.sh`

3. **Configure MongoDB:**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create `.env` file:
     ```env
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
     PORT=5000
     NODE_ENV=development
     FRONTEND_URL=http://localhost:5173
     ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   Expected output:
   ```
   ✅ MongoDB Connected Successfully
   🚀 Backend running on http://localhost:5000
   ```

## 📚 API Documentation

### Projects Endpoints

#### GET /api/projects
Get all projects with thumbnail images
```bash
curl http://localhost:5000/api/projects
```

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Project Title",
    "description": "Project description...",
    "link": "https://github.com/username/project",
    "thumbnail_image": "http://localhost:5000/uploads/1234567890.png",
    "createdAt": "2024-01-01T10:00:00.000Z",
    "updatedAt": "2024-01-01T10:00:00.000Z"
  }
]
```

#### GET /api/projects/:id
Get single project by ID

#### POST /api/projects
Create new project with optional thumbnail
```bash
curl -X POST http://localhost:5000/api/projects \
  -F "title=My Project" \
  -F "description=Project description" \
  -F "link=https://github.com/user/project" \
  -F "thumbnail_image=@image.png"
```

#### PUT /api/projects/:id
Update project (all fields required)

#### DELETE /api/projects/:id
Delete project and associated thumbnail

### Skills Endpoints

#### GET /api/skills
Get all skills

#### GET /api/skills/:id
Get single skill by ID

#### POST /api/skills
Create new skill with optional icon
```bash
curl -X POST http://localhost:5000/api/skills \
  -F "name=JavaScript" \
  -F "proficiency=Advanced" \
  -F "description=JavaScript description" \
  -F "icon=@icon.png"
```

#### PUT /api/skills/:id
Update skill

#### DELETE /api/skills/:id
Delete skill

### Health Check

#### GET /api/health
Check if backend is running
```bash
curl http://localhost:5000/api/health
```

## 🔄 Data Migration

If you have existing JSON data:

```bash
node migrate.js
```

This will:
1. Connect to MongoDB
2. Clear existing data (optional)
3. Import all projects and skills from JSON files
4. Show migration status

## 🌐 Deployment Options

### Render.com (Recommended)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy (auto-deploys on push)

### Railway
1. Go to railway.app
2. Create new project from GitHub
3. Add MongoDB service
4. Configure environment variables

### Vercel + Render
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

**See MONGODB_SETUP.md for detailed deployment instructions**

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| MONGODB_URI | MongoDB connection string | ✅ | - |
| PORT | Server port | ❌ | 5000 |
| NODE_ENV | Environment (development/production) | ❌ | development |
| FRONTEND_URL | Frontend URL for CORS | ❌ | http://localhost:5173 |
| MAX_FILE_SIZE | Maximum file upload size (bytes) | ❌ | 5242880 (5MB) |

### File Upload
- **Max Size:** 5MB (configurable)
- **Allowed Types:** JPEG, PNG, GIF, WebP
- **Storage:** `/uploads` directory

## 🔐 Security Features

✅ **CORS Protection** - Configurable cross-origin access
✅ **Input Validation** - MongoDB schema validation
✅ **File Type Checking** - MIME type verification
✅ **Size Limits** - File size restrictions
✅ **Error Handling** - No sensitive data exposure
✅ **Environment Variables** - Credentials in .env (not in repo)

## 🐛 Troubleshooting

### Connection Error: MONGODB_URI not set
**Solution:** Create `.env` file with MongoDB connection string

### Validation Error: Missing required field
**Solution:** Ensure all required fields are provided:
- Projects: title, description, link
- Skills: name

### Duplicate Skill Error
**Solution:** Skill names must be unique. Try a different name.

### File Upload Failed
**Solution:** Check file size and format. Only images accepted (max 5MB).

### CORS Error in Frontend
**Solution:** Update FRONTEND_URL in `.env` to match your frontend URL

## 📝 Database Schema

### Project Schema
```javascript
{
  title: String (required, max 200 chars),
  description: String (required),
  link: String (required, valid URL),
  thumbnail_image: String,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

### Skill Schema
```javascript
{
  name: String (required, unique, max 100 chars),
  proficiency: String (enum: Beginner, Intermediate, Advanced, Expert, ""),
  description: String,
  icon: String,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🧪 Testing

Test the health endpoint:
```bash
curl http://localhost:5000/api/health
```

Test projects endpoint:
```bash
curl http://localhost:5000/api/projects
```

## 📖 Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Run production server |
| Dev | `npm run dev` | Run with nodemon (hot reload) |
| Setup | `setup.bat` (Windows) or `bash setup.sh` (Unix) | Automated setup |
| Migrate | `node migrate.js` | Migrate JSON data to MongoDB |

## 📚 Documentation

- [MongoDB Setup Guide](./MONGODB_SETUP.md) - Detailed setup and deployment
- [Mongoose Docs](https://mongoosejs.com) - Database ODM
- [Express Docs](https://expressjs.com) - Web framework

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open Pull Request

## 📄 License

ISC

## 📞 Support

For issues and questions:
1. Check MONGODB_SETUP.md troubleshooting
2. Review error messages and logs
3. Check MongoDB Atlas dashboard
4. Visit [MongoDB Community](https://community.mongodb.com)

---

**Happy coding! 🚀**
