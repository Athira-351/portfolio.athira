# MongoDB Connection String Guide

## 📝 Connection String Format

After creating your MongoDB Atlas cluster, your connection string will look like:

```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name?retryWrites=true&w=majority
```

## 🔑 Replace These Values:

### Username & Password
From MongoDB Atlas → Database Access:
```
mongodb+srv://YOUR_DATABASE_USER:YOUR_DATABASE_PASSWORD@cluster0.xxxxx.mongodb.net/...
```

### Cluster Address
From MongoDB Atlas → Connect → Connection String:
```
mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/...
                        ↑ This value from Atlas
```

### Database Name
Create any database name (e.g., "portfolio"):
```
mongodb+srv://user:pass@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
                                            ↑ Your database name
```

## ✅ Complete Example

```env
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```

## ⚠️ Common Mistakes

### ❌ Special Characters in Password
If password has special characters, URL-encode them:
- `@` → `%40`
- `:` → `%3A`
- `#` → `%23`
- `/` → `%2F`
- `?` → `%3F`

Example:
```
Password: my@password#123
Encoded: my%40password%23123

mongodb+srv://user:my%40password%23123@cluster...
```

### ❌ Forgot Password
Cannot retrieve password from MongoDB Atlas. Must reset:
1. Go to Database Access
2. Edit user
3. Regenerate password

### ❌ IP Not Whitelisted
Add your IP to Network Access:
1. MongoDB Atlas → Network Access
2. Add IP Address
3. Or use 0.0.0.0/0 (less secure, for testing only)

### ❌ Database Doesn't Exist
MongoDB creates the database automatically when you:
1. Create your first document
2. Your code inserts data

No need to pre-create the database!

## 🧪 Testing Your Connection

### Using MongoDB Compass (GUI)
1. Download MongoDB Compass
2. Paste your connection string
3. Click Connect
4. Browse your database

### Using Terminal
```bash
npm run dev
```

Look for:
```
✅ MongoDB Connected Successfully
```

## 🆘 Troubleshooting

### Error: "Authentication failed"
- [ ] Check username spelling
- [ ] Check password spelling
- [ ] Check special characters are URL-encoded
- [ ] Verify user exists in Database Access

### Error: "Timed out connecting"
- [ ] Check your IP is whitelisted
- [ ] Check network connection
- [ ] Try adding 0.0.0.0/0 temporarily for testing
- [ ] Check cluster is running (not paused)

### Error: "DNS lookup failed"
- [ ] Check cluster name spelling
- [ ] Check connection string copied correctly
- [ ] Check internet connection

## 📚 MongoDB Atlas Steps (Quick Reference)

1. **Create Account**: mongodb.com/cloud/atlas
2. **Create Organization**: Enter name → Next
3. **Create Project**: Enter name → Create Project
4. **Create Cluster**: Select M0 Free → Create
5. **Create User**: Database Access → Add User
6. **Whitelist IP**: Network Access → Add Current IP
7. **Get String**: Cluster → Connect → Copy Connection String
8. **Replace Values**: Fill in username, password, database name
9. **Paste in .env**: MONGODB_URI=...

## 🔒 Security Tips

1. Use strong passwords (mix of upper/lower/numbers/symbols)
2. Don't share your connection string
3. Restrict IP access when possible
4. Use environment variables (.env)
5. Never commit .env to git
6. Rotate passwords periodically
7. Use different users for different environments

## 🌍 Deployment Connection Strings

### For Render/Railway/Production:
Use the same connection string but ensure:
1. Environment variable is set in hosting platform
2. Your hosting IP is whitelisted (or use 0.0.0.0/0)
3. Password doesn't contain special characters

---

**Need More Help?**
See MONGODB_SETUP.md for complete setup guide!
