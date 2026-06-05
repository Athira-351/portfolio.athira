#!/bin/bash
# Quick Start Script for Portfolio MongoDB Setup

echo "🚀 Portfolio MongoDB Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ NPM version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "📋 Setup Instructions:"
echo "1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas"
echo "2. Copy your connection string"
echo "3. Create a .env file in the backend folder with:"
echo "   MONGODB_URI=your_connection_string"
echo "   PORT=5000"
echo "   NODE_ENV=development"
echo "   FRONTEND_URL=http://localhost:5173"
echo ""
echo "4. Run 'npm run dev' to start the server"
echo ""
echo "✨ All set! Follow the MongoDB setup guide for detailed instructions."
