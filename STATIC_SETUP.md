# Static Portfolio Website Setup

This portfolio has been converted to a **static website**. All backend dependencies have been removed, and the data is now served directly from JSON files in the frontend.

## Project Structure

```
frontend/
  ├── public/
  │   ├── data/
  │   │   ├── projects.json    # Your projects data
  │   │   └── skills.json       # Your skills data
  │   └── vite.svg
  ├── src/                       # React components
  └── package.json
```

## How to Edit Your Portfolio Data

### 1. **Edit Projects** 

Open `frontend/public/data/projects.json` and update the projects array:

```json
[
  {
    "id": 1771048442430,
    "title": "Your Project Title",
    "description": "Project description here",
    "link": "https://your-project-link.com",
    "thumbnail_image": "/path/to/image.png",
    "createdAt": "2026-02-14T05:54:02.430Z"
  }
]
```

**Fields:**
- `id`: Unique identifier (timestamp is recommended)
- `title`: Project name
- `description`: Detailed description
- `link`: URL to the project
- `thumbnail_image`: Path to project image (optional)
- `createdAt`: Creation date (ISO format)

### 2. **Edit Skills**

Open `frontend/public/data/skills.json` and update the skills array:

```json
[
  {
    "id": 1771048831976,
    "name": "Skill Name",
    "proficiency": "Expert/Intermediate/Beginner",
    "description": "Skill description",
    "icon": "/path/to/icon.png",
    "createdAt": "2026-02-14T06:00:31.976Z"
  }
]
```

**Fields:**
- `id`: Unique identifier (timestamp is recommended)
- `name`: Skill name
- `proficiency`: Your proficiency level
- `description`: What you know about this skill
- `icon`: Path to skill icon (optional)
- `createdAt`: Creation date (ISO format)

## Development

### Install Dependencies
```bash
cd frontend
npm install
```

### Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder that can be deployed to any static hosting service.

## Deployment

Since this is a static website, you can deploy it to:

- **GitHub Pages** - Free hosting for static sites
- **Vercel** - Excellent for React/Vite projects
- **Netlify** - Easy deployment from GitHub
- **AWS S3** - Static website hosting
- **Firebase Hosting** - Google's static hosting platform
- **Any web server** - Works on traditional hosting

The `dist/` folder output from `npm run build` contains everything needed.

## Important Notes

- ✅ **No backend server needed** - Everything is static
- ✅ **Fast loading** - No API calls, instant data
- ✅ **SEO friendly** - Static HTML pages
- ⚠️ **Manual updates** - Edit JSON files directly to update content
- ⚠️ **No admin panel** - The admin pages show instructions to edit JSON files

## Project Data Location

- Projects: `frontend/public/data/projects.json`
- Skills: `frontend/public/data/skills.json`

## Features Included

- ✅ Projects showcase
- ✅ Skills display
- ✅ Project details pages
- ✅ About, Contact, Home pages
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Fully static - no backend required
