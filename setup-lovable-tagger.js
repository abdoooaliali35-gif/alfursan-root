#!/usr/bin/env node

/**
 * Setup script for lovable-tagger local dependency
 * This ensures the symlink exists even after npm install
 */

const fs = require('fs');
const path = require('path');

const libPath = path.join(__dirname, 'lib', 'lovable-tagger');
const nodeModulesPath = path.join(__dirname, 'node_modules', 'lovable-tagger');

// Ensure node_modules directory exists
const nodeModulesDir = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesDir)) {
  fs.mkdirSync(nodeModulesDir, { recursive: true });
}

// Remove existing symlink/directory if it exists
if (fs.existsSync(nodeModulesPath)) {
  try {
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  } catch (err) {
    console.warn('Warning: Could not remove existing lovable-tagger:', err.message);
  }
}

// Create symlink
try {
  fs.symlinkSync('../../lib/lovable-tagger', nodeModulesPath, 'dir');
  console.log('✓ lovable-tagger symlink created successfully');
} catch (err) {
  console.error('Error creating symlink:', err.message);
  
  // Fallback: copy files instead of symlink
  try {
    fs.cpSync(libPath, nodeModulesPath, { recursive: true });
    console.log('✓ lovable-tagger copied successfully (fallback)');
  } catch (copyErr) {
    console.error('Error copying files:', copyErr.message);
    process.exit(1);
  }
}