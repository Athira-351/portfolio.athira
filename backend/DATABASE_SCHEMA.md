# MongoDB Database Schema Design

## Database Name: `portfolio_db`

This document describes the MongoDB collections structure for the portfolio application.

## Collections Overview

### 1. Projects Collection

**Purpose:** Store portfolio project information

**Collection Name:** `projects`

**Schema:**
```javascript
{
  _id: ObjectId,                    // MongoDB auto-generated ID
  title: String,                    // Project title (required, max 200 chars)
  description: String,              // Detailed project description (required)
  link: String,                     // Project URL (required, must be valid URL)
  thumbnail_image: String,          // Path to project thumbnail image (optional)
  createdAt: Date,                  // Auto-generated timestamp
  updatedAt: Date                   // Auto-updated timestamp
}
```

**Validations:**
- `title`: Required, trimmed, max 200 characters
- `description`: Required, trimmed
- `link`: Required, must match valid URL pattern (regex validated)
- `thumbnail_image`: Optional, stored as file path

**Indexes:**
- `_id` (primary key, auto-created)
- Recommended: Index on `createdAt` for sorting

**Example Document:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Private Family Social Media Platform",
  "description": "A secure private social networking platform designed exclusively for families...",
  "link": "https://athira-351.github.io/private_family_group_profile/",
  "thumbnail_image": "/uploads/project-thumbnail.png",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-20T15:45:00.000Z"
}
```

---

### 2. Skills Collection

**Purpose:** Store developer skills and proficiencies

**Collection Name:** `skills`

**Schema:**
```javascript
{
  _id: ObjectId,                    // MongoDB auto-generated ID
  name: String,                     // Skill name (required, unique, max 100 chars)
  proficiency: String,              // Proficiency level (Beginner/Intermediate/Advanced/Expert)
  description: String,              // Detailed skill description (optional)
  icon: String,                     // Path to skill icon image (optional)
  createdAt: Date,                  // Auto-generated timestamp
  updatedAt: Date                   // Auto-updated timestamp
}
```

**Validations:**
- `name`: Required, unique, trimmed, max 100 characters
- `proficiency`: Enum (Beginner, Intermediate, Advanced, Expert, or empty string)
- `description`: Optional, trimmed
- `icon`: Optional, stored as file path

**Indexes:**
- `_id` (primary key, auto-created)
- `name` (unique index, auto-created)
- Recommended: Index on `proficiency` for filtering

**Example Document:**
```json
{
  "_id": "607f1f77bcf86cd799439015",
  "name": "React",
  "proficiency": "Advanced",
  "description": "Proficient in building scalable React applications with hooks, context API...",
  "icon": "/uploads/react-icon.png",
  "createdAt": "2024-01-10T08:00:00.000Z",
  "updatedAt": "2024-01-18T12:00:00.000Z"
}
```

---

## Data Relationships

### Between Projects and Skills

**Relationship Type:** Many-to-Many (implicit)

- One skill can be used in multiple projects
- One project may require multiple skills
- No direct reference field (denormalized structure)
- Relationship managed at application level through project descriptions

**Why This Design?**
- Flexible - projects describe their tech stack in the description
- Simple querying - no complex joins needed
- Scalable - easy to manage independently

**Alternative (if needed):**
If you need to track which skills are used in each project explicitly:
```javascript
// Add to Projects schema:
technologiesUsed: [
  {
    skillId: ObjectId,    // Reference to skill
    role: String          // e.g., "primary", "secondary"
  }
]
```

---

## Collection Operations

### Projects Operations

```javascript
// Find all projects (sorted by creation date)
db.projects.find().sort({ createdAt: -1 })

// Find project by ID
db.projects.findById("507f1f77bcf86cd799439011")

// Find projects by title (partial match)
db.projects.find({ title: { $regex: "search", $options: "i" } })

// Count total projects
db.projects.countDocuments()

// Update project
db.projects.findByIdAndUpdate(id, updateData, { new: true })

// Delete project
db.projects.findByIdAndDelete(id)
```

### Skills Operations

```javascript
// Find all skills sorted by proficiency
db.skills.find().sort({ proficiency: -1 })

// Find skill by name (case-insensitive)
db.skills.findOne({ name: { $regex: "^javascript$", $options: "i" } })

// Find all advanced skills
db.skills.find({ proficiency: "Advanced" })

// Find skills by partial name
db.skills.find({ name: { $regex: "script", $options: "i" } })

// Count total skills
db.skills.countDocuments()

// Update skill
db.skills.findByIdAndUpdate(id, updateData, { new: true })

// Delete skill
db.skills.findByIdAndDelete(id)
```

---

## Database Sizing Estimates

### Storage Per Document

**Projects Collection:**
- Per document: ~500 bytes (average)
- 100 projects: ~50 KB
- 1000 projects: ~500 KB

**Skills Collection:**
- Per document: ~300 bytes (average)
- 50 skills: ~15 KB
- 100 skills: ~30 KB

**Total Database Size:** ~100 KB for typical usage

---

## Backup Strategy

### Recommended Backups
1. **Automatic (MongoDB Atlas):**
   - Continuous snapshots (free tier: limited)
   - Manual backups available

2. **Manual Backups:**
   ```bash
   # Export collections to JSON
   mongoexport --uri "mongodb+srv://..." --collection projects --out projects.json
   mongoexport --uri "mongodb+srv://..." --collection skills --out skills.json
   ```

3. **Application-Level:**
   - Regular exports from admin dashboard
   - Version control for schema changes

---

## Security Considerations

✅ **Implemented:**
- Input validation via Mongoose schemas
- File type restrictions for uploads
- CORS protection
- Error handling without data exposure

⚠️ **Recommended:**
- Enable MongoDB Atlas encryption at rest
- Use IP whitelist in Network Access
- Regular password rotation
- Monitor audit logs (premium feature)

---

## Scaling Considerations

### Current Design Handles:
- Millions of documents efficiently
- Simple queries without joins
- File uploads with references
- Multiple concurrent users

### If You Need to Scale:
1. **Add Indexes:** On frequently filtered fields
2. **Aggregation Pipeline:** For complex reporting
3. **Caching Layer:** Redis for frequently accessed data
4. **Sharding:** If dataset exceeds 10GB

---

## Future Enhancements

### Possible New Collections:

**1. Categories Collection:**
```javascript
{
  name: String,           // "Web Development", "Mobile", etc.
  description: String,
  color: String          // For UI display
}
```

**2. Experience Collection:**
```javascript
{
  role: String,
  company: String,
  startDate: Date,
  endDate: Date,
  description: String
}
```

**3. Education Collection:**
```javascript
{
  school: String,
  degree: String,
  fieldOfStudy: String,
  gradDate: Date
}
```

---

## MongoDB Atlas Monitoring

### Key Metrics to Track:
- **Connections:** Active connections to database
- **Operation Counters:** Reads, writes, updates
- **Query Performance:** Slow query analysis
- **Disk Usage:** Storage consumption
- **Network I/O:** Data in/out

Access via: MongoDB Atlas → Monitoring

---

## Migration Path (If Needed)

If migrating from other databases:

1. **From SQL (MySQL, PostgreSQL):**
   - Map tables → collections
   - Map rows → documents
   - Handle relationships (embed vs reference)

2. **From JSON Files:**
   - Use `migrate.js` script
   - Map file data to schema
   - Validate during migration

3. **From Other MongoDB:**
   - Use mongodump/mongorestore
   - Or use MongoDB Tools for migration

---

**Last Updated:** 2024
**Database Version:** MongoDB 5.0+
**Mongoose Version:** 8.0+
