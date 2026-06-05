@echo off
REM Quick Start Script for Portfolio MongoDB Setup (Windows)

echo 🚀 Portfolio MongoDB Setup Script
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo ✅ NPM version:
npm -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo.
echo 📋 Setup Instructions:
echo 1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
echo 2. Copy your connection string
echo 3. Create a .env file in the backend folder with:
echo    MONGODB_URI=your_connection_string
echo    PORT=5000
echo    NODE_ENV=development
echo    FRONTEND_URL=http://localhost:5173
echo.
echo 4. Run 'npm run dev' to start the server
echo.
echo ✨ All set! Follow the MongoDB setup guide for detailed instructions.
pause
