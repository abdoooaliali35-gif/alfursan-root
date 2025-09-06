#!/usr/bin/env node

/**
 * Production start script for Al Fursan project
 * Optimized for Replit deployment with proper port management
 */

const { spawn } = require('child_process');
const http = require('http');

console.log('🚀 Starting Al Fursan production server...');

// Start vite preview with optimized settings
const viteProcess = spawn('vite', [
  'preview', 
  '--host', '0.0.0.0', 
  '--port', '5000',
  '--strictPort'
], {
  stdio: 'pipe',
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
});

// Handle stdout
viteProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  
  // Check if server is ready
  if (output.includes('Local:') || output.includes('ready')) {
    console.log('✅ Production server is ready!');
  }
});

// Handle stderr
viteProcess.stderr.on('data', (data) => {
  const error = data.toString();
  if (!error.includes('Warning') && !error.includes('deprecated')) {
    console.error('Server error:', error);
  }
});

// Handle process exit
viteProcess.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

// Handle termination signals
process.on('SIGTERM', () => {
  console.log('📦 Shutting down production server...');
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('📦 Shutting down production server...');
  viteProcess.kill('SIGINT');
});

// Quick health check to ensure port opens fast
setTimeout(() => {
  const healthCheck = http.request({
    hostname: 'localhost',
    port: 5000,
    path: '/',
    method: 'GET',
    timeout: 5000
  }, (res) => {
    if (res.statusCode === 200) {
      console.log('🎉 Health check passed - server is responding');
    }
  });
  
  healthCheck.on('error', (err) => {
    console.log('⏳ Server starting up...', err.code);
  });
  
  healthCheck.end();
}, 3000);