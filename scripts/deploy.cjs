#!/usr/bin/env node

/**
 * Deployment preparation script
 * Ensures all dependencies and configurations are ready
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Preparing Al Fursan for deployment...');

// Ensure lovable-tagger local package is set up
try {
  const packagePath = path.join(__dirname, '..', 'packages', 'lovable-tagger', 'package.json');
  require(packagePath);
  console.log('✅ lovable-tagger local package verified');
} catch (error) {
  console.log('📦 Setting up lovable-tagger...');
  execSync('npm run postinstall', { stdio: 'inherit' });
}

// Build the application
console.log('🔨 Building application...');
execSync('npm run build', { stdio: 'inherit' });

// Start deployment server
console.log('🌐 Starting deployment server...');
execSync('node deploy-server.cjs', { stdio: 'inherit' });