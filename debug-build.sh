#!/bin/bash

echo "=== Debug Build Script ==="
echo "Node version:"
node --version

echo "NPM version:"
npm --version

echo "Current directory:"
pwd

echo "Contents of current directory:"
ls -la

echo "Package.json exists:"
if [ -f "package.json" ]; then
    echo "YES"
    echo "Package.json content:"
    cat package.json
else
    echo "NO"
fi

echo "Source directory exists:"
if [ -d "src" ]; then
    echo "YES"
    echo "Source directory contents:"
    ls -la src/
else
    echo "NO"
fi

echo "Running npm install..."
npm install

echo "Running build..."
npm run build

echo "Build result:"
if [ -d "dist" ]; then
    echo "Dist directory created successfully"
    echo "Dist contents:"
    ls -la dist/
else
    echo "Dist directory NOT created"
fi

echo "=== End Debug Script ==="
