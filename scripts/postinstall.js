#!/usr/bin/env node

/**
 * Post-install script for Al Fursan project
 * Ensures lovable-tagger is always available after npm install
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Running post-install setup for Al Fursan project...');

const packagePath = path.join(__dirname, '..', 'packages', 'lovable-tagger');
const nodeModulesPath = path.join(__dirname, '..', 'node_modules', 'lovable-tagger');

// Check if packages/lovable-tagger exists
if (!fs.existsSync(packagePath)) {
  console.log('⚠️  Local lovable-tagger package not found, skipping setup');
  process.exit(0);
}

// Check if already installed in node_modules
if (fs.existsSync(nodeModulesPath)) {
  // Verify it's properly linked
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(nodeModulesPath, 'package.json'), 'utf8'));
    if (packageJson.name === 'lovable-tagger' && packageJson.version === '1.1.9') {
      console.log('✅ lovable-tagger already properly installed');
      process.exit(0);
    }
  } catch (error) {
    console.log('🔄 Reinstalling lovable-tagger...');
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  }
}

// Install local package
try {
  console.log('📦 Installing local lovable-tagger package...');
  execSync('npm install file:./packages/lovable-tagger', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  console.log('✅ lovable-tagger installed successfully');
} catch (error) {
  console.error('❌ Failed to install lovable-tagger:', error.message);
  
  // Fallback: copy files directly
  try {
    console.log('🔄 Fallback: copying files directly...');
    fs.cpSync(packagePath, nodeModulesPath, { recursive: true });
    console.log('✅ lovable-tagger copied successfully (fallback)');
  } catch (copyError) {
    console.error('❌ Fallback failed:', copyError.message);
    process.exit(1);
  }
}

console.log('🎉 Post-install setup completed successfully!');