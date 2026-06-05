# MongoDB Migration Verification Checklist

Use this checklist to verify your MongoDB setup is working correctly.

## ✅ Pre-Setup Verification

- [ ] Node.js installed: `node -v` (should be 14+)
- [ ] npm installed: `npm -v`
- [ ] You have a MongoDB Atlas account
- [ ] You have a MongoDB connection string
- [ ] Git repository initialized

## ✅ Installation Verification

In the `backend` folder:

```bash
# Check dependencies installed
npm ls

# Should show:
# ├── cors
# ├── dotenv
# ├── express
# ├── mongoose
# └── multer
```

- [ ] All dependencies installed without errors
- [ ] `.env` file created
- [ ] `.env` added to `.gitignore`

## ✅ Environment Configuration

Your `.env` file should contain:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=5242880
```

Verify each line:
- [ ] MONGODB_URI is not empty
- [ ] MONGODB_URI includes username (not `username`)
- [ ] MONGODB_URI includes password (not `password`)
- [ ] MONGODB_URI includes database name
- [ ] PORT is set to 5000
- [ ] NODE_ENV is set to development
- [ ] FRONTEND_URL matches your frontend

## ✅ MongoDB Connection Verification

Start the server:
```bash
npm run dev
```

Expected output in terminal:
```
✅ MongoDB Connected Successfully
🚀 Backend running on http://localhost:5000
📡 MongoDB connected to: mongodb+srv://...
```

- [ ] No "Cannot connect" errors
- [ ] No "MONGODB_URI not defined" errors
- [ ] Server runs on port 5000
- [ ] Connection shows success message

## ✅ API Endpoint Verification

Test each endpoint in a new terminal while server is running:

### Health Check
```bash
curl http://localhost:5000/api/health
```
Expected: `{"success":true,"message":"Backend is running","timestamp":"..."}`

- [ ] Health endpoint responds

### Get Projects
```bash
curl http://localhost:5000/api/projects
```
Expected: `[]` (empty array) or array of projects

- [ ] Projects endpoint responds
- [ ] Returns array (even if empty)

### Get Skills
```bash
curl http://localhost:5000/api/skills
```
Expected: `[]` (empty array) or array of skills

- [ ] Skills endpoint responds
- [ ] Returns array (even if empty)

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Project",
    "description": "Test description",
    "link": "https://github.com/test/project"
  }'
```
Expected: Project object with `_id` field

- [ ] Can create project without image
- [ ] Project has MongoDB `_id` field
- [ ] Response includes `success: true`

### Create Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Node.js",
    "proficiency": "Advanced",
    "description": "Backend development"
  }'
```
Expected: Skill object with `_id` field

- [ ] Can create skill without icon
- [ ] Skill has MongoDB `_id` field
- [ ] Response includes `success: true`

### Verify Data Persistence
After creating project and skill:
```bash
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/skills
```

- [ ] Created project appears in list
- [ ] Created skill appears in list
- [ ] Data persists after server restart

### Delete Test Data
```bash
# Get the _id from a project
curl http://localhost:5000/api/projects

# Delete using the _id
curl -X DELETE http://localhost:5000/api/projects/{_id}
```

- [ ] Can delete projects
- [ ] Deleted project no longer appears
- [ ] Success response received

## ✅ File Upload Verification

Create a test project with image:
```bash
curl -X POST http://localhost:5000/api/projects \
  -F "title=Image Test" \
  -F "description=Testing file upload" \
  -F "link=https://github.com/test/project" \
  -F "thumbnail_image=@/path/to/image.png"
```

- [ ] File upload completes without errors
- [ ] Response includes thumbnail_image path
- [ ] File exists in `uploads/` directory
- [ ] Image URL is accessible in browser

## ✅ Frontend Connection Verification

In your frontend, check:

```javascript
// In your API calls
const response = await fetch('http://localhost:5000/api/projects');
const data = await response.json();
console.log(data);
```

- [ ] Frontend can reach backend
- [ ] Data loads successfully
- [ ] No CORS errors in browser console
- [ ] Images display correctly

## ✅ Data Migration Verification (if applicable)

If migrating from JSON:
```bash
node migrate.js
```

Expected output:
```
✅ Found X projects
✅ Found Y skills
✅ Migrated X projects
✅ Migrated Y skills
✨ Migration completed successfully!
```

- [ ] Migration runs without errors
- [ ] All projects migrated
- [ ] All skills migrated
- [ ] Data appears in MongoDB Atlas

## ✅ Deployment Verification (if deploying)

Before deploying to production:

- [ ] `.env` file NOT committed to git
- [ ] `.env` added to `.gitignore`
- [ ] All API endpoints tested locally
- [ ] Frontend tested with backend
- [ ] Error handling works correctly
- [ ] File uploads tested
- [ ] Data persistence verified

## 🚨 Common Issues & Solutions

### Issue: "Cannot GET /api/projects"
**Solution:** 
- Check server is running
- Check URL is correct (http://localhost:5000)
- Check backend port matches FRONTEND_URL

### Issue: "MONGODB_URI is not defined"
**Solution:**
- Check `.env` file exists
- Verify MONGODB_URI=... line is present
- Restart server after adding `.env`

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Check connection string format
- Verify username/password
- Add your IP to MongoDB Atlas IP Whitelist
- Check network connection

### Issue: "CORS error in frontend"
**Solution:**
- Check FRONTEND_URL in `.env`
- Ensure it matches your frontend URL
- Restart server after changing

### Issue: "Duplicate key error"
**Solution:**
- Skill names must be unique
- Check if skill already exists
- Use different name or delete existing

## 📊 MongoDB Atlas Verification

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Select your cluster
3. Go to "Collections"
4. Verify:
   - [ ] Database exists
   - [ ] `projects` collection created
   - [ ] `skills` collection created
   - [ ] Documents appear in collections

## ✅ Final Checklist

- [ ] All verification steps passed
- [ ] Backend runs without errors
- [ ] All endpoints respond correctly
- [ ] Frontend connects successfully
- [ ] Data persists in MongoDB
- [ ] File uploads work
- [ ] Error handling works
- [ ] Ready for production deployment!

## 📞 If Something Fails

1. **Check error message carefully** - Copy full error text
2. **Check the specific troubleshooting section** above
3. **Review MONGODB_SETUP.md** for detailed help
4. **Check MongoDB Atlas dashboard** for connection issues
5. **Verify environment variables** in `.env`
6. **Try restarting the server** - Often fixes temporary issues
7. **Check network connection** - Ensure you have internet

---

**Congratulations! Your MongoDB setup is ready! 🎉**
