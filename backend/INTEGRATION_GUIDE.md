# Backend & Frontend Integration Guide

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React)                          │
│            (http://localhost:5173)                          │
│                                                              │
│  - Displays projects and skills                             │
│  - File upload forms                                        │
│  - Admin dashboard                                          │
└─────────────────────────────────────────────────────────────┘
                           │
                    API Calls (HTTP)
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   GET /api/           POST /api/         DELETE /api/
   PUT /api/           (File Upload)       (With ID)
   
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Express)                         │
│            (http://localhost:5000)                          │
│                                                              │
│  - Express.js server                                        │
│  - Multer file handling                                     │
│  - Mongoose validation                                      │
│  - CORS enabled                                             │
└─────────────────────────────────────────────────────────────┘
                           │
                    Mongoose Queries
                           │
┌─────────────────────────────────────────────────────────────┐
│            MongoDB Atlas (Cloud Database)                    │
│        (portfolio_db)                                       │
│                                                              │
│  Collections:                                               │
│  - projects                                                 │
│  - skills                                                   │
│  - (uploads stored in /uploads folder)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Setup Instructions

### Step 1: Backend Setup

#### 1.1 Create .env File

In `backend/` folder, create `.env`:

```env
# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://athira351:YOUR_PASSWORD@cluster0.1apkgzv.mongodb.net/portfolio_db?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:5173

# File Upload
MAX_FILE_SIZE=5242880
```

**Important:** Replace `YOUR_PASSWORD` with your actual MongoDB password.

#### 1.2 Install Dependencies

```bash
cd backend
npm install
```

#### 1.3 Verify Connection

```bash
npm run dev
```

Expected output:
```
✅ MongoDB Connected Successfully
🚀 Backend running on http://localhost:5000
```

#### 1.4 Seed Sample Data (Optional)

```bash
node seed-db.js
```

This will:
- Connect to MongoDB
- Clear existing data
- Insert 4 sample projects
- Insert 10 sample skills
- Display the inserted data

---

### Step 2: Frontend Setup

#### 2.1 Verify API URL

In your frontend code, make sure the API base URL is set correctly:

```javascript
// Example: src/api/config.js
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Or in your fetch calls:
const response = await fetch('http://localhost:5000/api/projects');
```

#### 2.2 Update Frontend Environment (if using .env)

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENVIRONMENT=development
```

#### 2.3 Start Frontend

```bash
cd frontend
npm run dev
```

Expected: Frontend accessible at http://localhost:5173

---

## API Endpoints Reference

### Base URL
```
http://localhost:5000/api
```

### Projects Endpoints

#### 1. Get All Projects
```
GET /api/projects
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Project Title",
    "description": "Description",
    "link": "https://github.com/...",
    "thumbnail_image": "http://localhost:5000/uploads/1234567.png",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

#### 2. Get Single Project
```
GET /api/projects/:id
```

**Parameters:**
- `id` - Project MongoDB ObjectId

#### 3. Create Project
```
POST /api/projects
Content-Type: multipart/form-data
```

**Form Data:**
- `title` (required): String
- `description` (required): String
- `link` (required): Valid URL
- `thumbnail_image` (optional): Image file

**JavaScript Example:**
```javascript
const formData = new FormData();
formData.append('title', 'My Project');
formData.append('description', 'Project description');
formData.append('link', 'https://github.com/user/project');
formData.append('thumbnail_image', fileInput.files[0]);

const response = await fetch('http://localhost:5000/api/projects', {
  method: 'POST',
  body: formData
});
```

#### 4. Update Project
```
PUT /api/projects/:id
Content-Type: multipart/form-data
```

**Parameters:**
- `id` - Project MongoDB ObjectId

**Form Data:** Same as Create

#### 5. Delete Project
```
DELETE /api/projects/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

---

### Skills Endpoints

#### 1. Get All Skills
```
GET /api/skills
```

**Response:**
```json
[
  {
    "_id": "607f1f77bcf86cd799439015",
    "name": "React",
    "proficiency": "Advanced",
    "description": "React description",
    "icon": "http://localhost:5000/uploads/react.png",
    "createdAt": "2024-01-10T08:00:00.000Z",
    "updatedAt": "2024-01-10T08:00:00.000Z"
  }
]
```

#### 2. Get Single Skill
```
GET /api/skills/:id
```

#### 3. Create Skill
```
POST /api/skills
Content-Type: multipart/form-data
```

**Form Data:**
- `name` (required): String
- `proficiency` (optional): Beginner | Intermediate | Advanced | Expert
- `description` (optional): String
- `icon` (optional): Image file

**JavaScript Example:**
```javascript
const formData = new FormData();
formData.append('name', 'JavaScript');
formData.append('proficiency', 'Advanced');
formData.append('description', 'JS description');
formData.append('icon', fileInput.files[0]);

const response = await fetch('http://localhost:5000/api/skills', {
  method: 'POST',
  body: formData
});
```

#### 4. Update Skill
```
PUT /api/skills/:id
Content-Type: multipart/form-data
```

#### 5. Delete Skill
```
DELETE /api/skills/:id
```

---

### Health Check

#### Server Status
```
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Backend is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## Frontend Implementation Examples

### React Hook for Fetching Projects

```javascript
import { useEffect, useState } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/projects');
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
          {project.thumbnail_image && (
            <img src={project.thumbnail_image} alt={project.title} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
```

### React Hook for Uploading Project

```javascript
import { useState } from 'react';

function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    file: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('link', formData.link);
      if (formData.file) {
        form.append('thumbnail_image', formData.file);
      }

      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        body: form
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const newProject = await response.json();
      console.log('Project created:', newProject);
      // Refresh projects list or redirect
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="link"
        placeholder="Project URL"
        value={formData.link}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="file"
        onChange={handleChange}
        accept="image/*"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Project'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default CreateProject;
```

---

## Error Handling

### Common Errors & Solutions

#### 1. CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- Check `FRONTEND_URL` in backend `.env`
- Ensure it matches your frontend URL
- Restart backend server

#### 2. 404 Not Found
```
Cannot POST /api/projects
```

**Solution:**
- Verify backend is running
- Check endpoint URL spelling
- Check HTTP method (GET, POST, etc.)

#### 3. 400 Bad Request
```
Validation error: Title, description, and link are required
```

**Solution:**
- Check all required fields are provided
- Verify data format matches schema
- Check file upload size

#### 4. MongoDB Connection Error
```
Cannot connect to MongoDB
```

**Solution:**
- Verify `MONGODB_URI` in `.env`
- Check username and password
- Verify IP is whitelisted in MongoDB Atlas
- Check internet connection

---

## Testing the Integration

### Using curl (Command Line)

#### Test Health
```bash
curl http://localhost:5000/api/health
```

#### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

#### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -F "title=Test Project" \
  -F "description=Test description" \
  -F "link=https://github.com/test/project"
```

#### Delete Project
```bash
curl -X DELETE http://localhost:5000/api/projects/{id}
```

### Using Postman

1. Open Postman
2. Create new request: `GET http://localhost:5000/api/projects`
3. Click Send
4. Should see array of projects

For POST requests:
1. Method: POST
2. URL: `http://localhost:5000/api/projects`
3. Body → form-data:
   - `title`: Your title
   - `description`: Your description
   - `link`: Your URL
   - `thumbnail_image`: Select file
4. Click Send

---

## Performance Optimization

### Frontend Tips
- Cache API responses
- Use pagination for large datasets
- Lazy load images
- Debounce search queries
- Use React.memo for components

### Backend Tips
- Add database indexes (on frequently queried fields)
- Implement caching (Redis)
- Use aggregation pipelines for complex queries
- Monitor slow queries in MongoDB Atlas

---

## Security Checklist

✅ **Backend:**
- [ ] .env file created and in .gitignore
- [ ] MONGODB_URI not exposed in code
- [ ] CORS configured for your frontend URL
- [ ] File upload validation enabled
- [ ] Input sanitization via Mongoose schemas

✅ **Frontend:**
- [ ] API URL not hardcoded (use environment variables)
- [ ] No sensitive data in localStorage
- [ ] HTTPS in production
- [ ] API key protection if applicable

✅ **Database:**
- [ ] IP whitelisted in MongoDB Atlas
- [ ] Strong password used
- [ ] Regular backups enabled
- [ ] Encryption at rest enabled

---

## Troubleshooting

### Backend not starting?
```bash
# Check if port 5000 is in use
netstat -an | grep 5000  # Linux/Mac
netstat -ano | findstr :5000  # Windows

# Change PORT in .env if needed
```

### Frontend can't reach backend?
```javascript
// Add console logs to debug
console.log('Fetching from:', 'http://localhost:5000/api/projects');

// Check network tab in browser DevTools
```

### Database not responding?
```bash
# Test connection directly
node check-db.js
```

---

## Next Steps

1. ✅ Backend running and connected to MongoDB
2. ✅ Frontend able to fetch data
3. ✅ Sample data inserted
4. **Deploy to production** (see MONGODB_SETUP.md)
5. Set up admin dashboard for data management
6. Add authentication/authorization
7. Implement caching layer

---

**Documentation Version:** 1.0
**Last Updated:** 2024
