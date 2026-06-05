# Frontend API Integration Guide

This guide explains how to use the provided API client and hooks to fetch and manage portfolio data in your React application.

## 📁 Frontend Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── client.js           # API client for backend calls
│   ├── hooks/
│   │   └── usePortfolioData.js # React hooks for data fetching
│   ├── components/
│   │   ├── ProjectList.jsx     # Display projects
│   │   ├── SkillList.jsx       # Display skills
│   │   └── AdminPanel.jsx      # Manage data
│   └── pages/
│       ├── Projects.jsx
│       └── Skills.jsx
└── .env                        # Environment variables
```

## 🚀 Quick Start

### 1. Configure Environment

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 2. Using the API Client

```javascript
import { apiClient } from './api/client.js';

// Get all projects
const projects = await apiClient.projects.getAll();

// Create project
const newProject = await apiClient.projects.create({
  title: 'My Project',
  description: 'Description',
  link: 'https://github.com/...',
  file: imageFile // optional
});

// Update project
await apiClient.projects.update(projectId, {
  title: 'Updated Title',
  description: 'Updated description',
  link: 'https://github.com/...'
});

// Delete project
await apiClient.projects.delete(projectId);
```

### 3. Using React Hooks

```javascript
import { useProjects, useSkills, useCreateProject } from './hooks/usePortfolioData.js';

function ProjectsPage() {
  // Fetch all projects
  const { projects, loading, error, refetch } = useProjects();
  
  // Create new project
  const { createProject, loading: creating } = useCreateProject();

  const handleCreateProject = async (data) => {
    try {
      await createProject(data);
      refetch(); // Refresh projects list
    } catch (err) {
      console.error('Failed to create project:', err);
    }
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Projects ({projects.length})</h1>
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

export default ProjectsPage;
```

## 📋 Complete Example Components

### Example 1: Display Projects List

```javascript
import React from 'react';
import { useProjects } from '../hooks/usePortfolioData.js';

function ProjectsDisplay() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (projects.length === 0) return <p>No projects found</p>;

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <div key={project._id} className="project-card">
          {project.thumbnail_image && (
            <img 
              src={project.thumbnail_image} 
              alt={project.title}
              className="project-image"
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project →
          </a>
          <small>
            Created: {new Date(project.createdAt).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default ProjectsDisplay;
```

### Example 2: Create Project Form

```javascript
import React, { useState } from 'react';
import { useCreateProject } from '../hooks/usePortfolioData.js';

function CreateProjectForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    file: null
  });
  const [preview, setPreview] = useState(null);
  const { createProject, loading, error } = useCreateProject();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files) {
      const file = files[0];
      setFormData(prev => ({ ...prev, file }));
      
      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await createProject(formData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        link: '',
        file: null
      });
      setPreview(null);
      
      onSuccess && onSuccess();
    } catch (err) {
      console.error('Error creating project:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <h2>Create New Project</h2>
      
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
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
        rows="4"
      />
      
      <input
        type="url"
        name="link"
        placeholder="Project URL"
        value={formData.link}
        onChange={handleChange}
        required
      />
      
      <div className="file-input">
        <input
          type="file"
          name="file"
          onChange={handleChange}
          accept="image/*"
        />
        {preview && (
          <img src={preview} alt="Preview" className="preview" />
        )}
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
}

export default CreateProjectForm;
```

### Example 3: Skills Display

```javascript
import React from 'react';
import { useSkills } from '../hooks/usePortfolioData.js';

function SkillsDisplay() {
  const { skills, loading, error } = useSkills();

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  // Group skills by proficiency
  const groupedSkills = {
    'Expert': skills.filter(s => s.proficiency === 'Expert'),
    'Advanced': skills.filter(s => s.proficiency === 'Advanced'),
    'Intermediate': skills.filter(s => s.proficiency === 'Intermediate'),
    'Beginner': skills.filter(s => s.proficiency === 'Beginner')
  };

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      
      {Object.entries(groupedSkills).map(([level, levelSkills]) => (
        levelSkills.length > 0 && (
          <div key={level} className="skill-level">
            <h3>{level}</h3>
            <div className="skill-list">
              {levelSkills.map(skill => (
                <div key={skill._id} className="skill-item">
                  {skill.icon && (
                    <img src={skill.icon} alt={skill.name} />
                  )}
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default SkillsDisplay;
```

### Example 4: Admin Panel for Managing Data

```javascript
import React, { useState } from 'react';
import { useProjects, useDeleteProject } from '../hooks/usePortfolioData.js';
import CreateProjectForm from './CreateProjectForm.jsx';

function AdminPanel() {
  const { projects, refetch } = useProjects();
  const { deleteProject, loading: deleting } = useDeleteProject();
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (projectId) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProject(projectId);
        refetch();
      } catch (err) {
        console.error('Error deleting project:', err);
      }
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>
      
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Create New Project'}
      </button>
      
      {showForm && (
        <CreateProjectForm 
          onSuccess={() => {
            setShowForm(false);
            refetch();
          }} 
        />
      )}
      
      <h2>All Projects ({projects.length})</h2>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td>{new Date(project.createdAt).toLocaleDateString()}</td>
              <td>
                <button 
                  onClick={() => handleDelete(project._id)}
                  disabled={deleting}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
```

## 🎯 API Methods Reference

### Projects API

```javascript
// Fetch all projects
apiClient.projects.getAll()

// Fetch single project
apiClient.projects.getById(projectId)

// Create project
apiClient.projects.create({
  title: String,
  description: String,
  link: String,
  file?: File
})

// Update project
apiClient.projects.update(projectId, {
  title?: String,
  description?: String,
  link?: String,
  file?: File
})

// Delete project
apiClient.projects.delete(projectId)
```

### Skills API

```javascript
// Fetch all skills
apiClient.skills.getAll()

// Fetch single skill
apiClient.skills.getById(skillId)

// Create skill
apiClient.skills.create({
  name: String,
  proficiency?: String,
  description?: String,
  file?: File
})

// Update skill
apiClient.skills.update(skillId, {
  name?: String,
  proficiency?: String,
  description?: String,
  file?: File
})

// Delete skill
apiClient.skills.delete(skillId)
```

## 🎨 React Hooks Reference

```javascript
// Get all projects
const { projects, loading, error, refetch } = useProjects();

// Get single project
const { project, loading, error } = useProject(projectId);

// Create project
const { createProject, loading, error } = useCreateProject();
await createProject({ title, description, link, file });

// Update project
const { updateProject, loading, error } = useUpdateProject();
await updateProject(projectId, { title, description, link });

// Delete project
const { deleteProject, loading, error } = useDeleteProject();
await deleteProject(projectId);

// Similar hooks for skills:
useSkills(), useSkill(id), useCreateSkill(), useUpdateSkill(), useDeleteSkill()
```

## ⚙️ Configuration

### Environment Variables

Create `frontend/.env`:
```env
# API Base URL (must match backend)
REACT_APP_API_URL=http://localhost:5000/api

# Optional: Other configurations
REACT_APP_ENVIRONMENT=development
```

### Backend Requirements

Ensure backend is:
1. Running: `npm run dev` in backend folder
2. Connected to MongoDB: Shows "✅ MongoDB Connected Successfully"
3. Accessible: `http://localhost:5000/api`

## 🧪 Testing

### Test API Connection

```javascript
import { apiClient } from './api/client.js';

useEffect(() => {
  const testConnection = async () => {
    try {
      const projects = await apiClient.projects.getAll();
      console.log('✅ Connected! Projects:', projects);
    } catch (err) {
      console.error('❌ Connection failed:', err);
    }
  };
  
  testConnection();
}, []);
```

### Using Browser DevTools

1. Open browser console (F12)
2. Check Network tab when fetching
3. Look for requests to `http://localhost:5000/api/...`
4. Verify responses have correct data

## 🐛 Troubleshooting

### "Failed to fetch: CORS error"
**Solution:** Ensure backend is running and `FRONTEND_URL` in `.env` is correct

### "Cannot find module: apiClient"
**Solution:** Check file path in import statement

### "API returns 400 Bad Request"
**Solution:** Check required fields are provided in request

### "Projects not loading"
**Solution:**
1. Verify backend is running
2. Check MongoDB is connected
3. Run `node seed-db.js` to insert sample data
4. Check browser console for errors

## 📚 Example Page Component

```javascript
import React from 'react';
import ProjectsDisplay from './components/ProjectsDisplay.jsx';
import SkillsDisplay from './components/SkillsDisplay.jsx';

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <ProjectsDisplay />
      <SkillsDisplay />
    </div>
  );
}

export default PortfolioPage;
```

## 📞 Need Help?

1. Check `INTEGRATION_GUIDE.md` in backend folder
2. Review example components above
3. Check browser console for error messages
4. Verify backend is running and connected

---

**You're ready to use MongoDB in your React app! 🚀**
