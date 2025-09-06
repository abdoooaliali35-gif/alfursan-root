#!/bin/bash

# Setup script for lovable-tagger local dependency
# This ensures the package exists after npm install

echo "Setting up lovable-tagger dependency..."

# Ensure node_modules directory exists
mkdir -p node_modules

# Remove existing directory if it exists
if [ -e "node_modules/lovable-tagger" ]; then
    rm -rf node_modules/lovable-tagger
fi

# Copy files directly (more reliable than symlink)
if cp -r lib/lovable-tagger node_modules/lovable-tagger; then
    echo "✓ lovable-tagger package copied successfully"
else
    echo "✗ Failed to setup lovable-tagger"
    exit 1
fi

echo "lovable-tagger setup complete!"