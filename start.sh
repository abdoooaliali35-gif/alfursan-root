#!/bin/bash

# Al Fursan Production Start Script
# Optimized for Replit deployment

echo "🚀 Starting Al Fursan Quadruple Factory production server..."

# Ensure dependencies are installed
if [ ! -d "node_modules/lovable-tagger" ]; then
    echo "📦 Setting up dependencies..."
    ./scripts/postinstall.cjs
fi

# Start production server with proper port binding
echo "🌐 Starting server on port 5000..."
exec npm run start