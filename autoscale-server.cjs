#!/usr/bin/env node

/**
 * Autoscale-compatible server for Al Fursan deployment
 * Runs on port 80 as required by Replit Autoscale
 */

const http = require('http');
const { spawn } = require('child_process');

console.log('🚀 Starting Al Fursan Autoscale server...');

// Start Vite preview on port 5000
const viteProcess = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'pipe',
  env: { ...process.env, NODE_ENV: 'production' }
});

let viteReady = false;

viteProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('Vite:', output);
  if (output.includes('Local:') || output.includes('ready')) {
    viteReady = true;
    console.log('✅ Vite server ready on port 5000');
  }
});

viteProcess.stderr.on('data', (data) => {
  console.error('Vite error:', data.toString());
});

// Create HTTP server on port 80 that proxies to port 5000
const server = http.createServer((req, res) => {
  // Handle health check
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ 
      status: 'ok', 
      viteReady, 
      timestamp: new Date().toISOString() 
    }));
  }

  // Show loading page if Vite not ready
  if (!viteReady) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Loading Al Fursan...</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px;">
          <h1>🚀 Al Fursan server is starting...</h1>
          <p>Please wait a moment...</p>
          <script>setTimeout(() => location.reload(), 2000);</script>
        </body>
      </html>
    `);
  }
  
  // Proxy request to Vite server on port 5000
  const proxyReq = http.request({
    hostname: 'localhost',
    port: 5000,
    path: req.url,
    method: req.method,
    headers: req.headers
  }, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    console.error('Proxy error:', err);
    res.writeHead(502, { 'Content-Type': 'text/html' });
    res.end('Server temporarily unavailable');
  });

  // Forward request body
  req.pipe(proxyReq);
});

// Start server on port 80 for Autoscale
const PORT = process.env.PORT || 80;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Autoscale server running on port ${PORT}`);
  console.log('✅ Ready for deployment!');
});

// Handle termination
process.on('SIGTERM', () => {
  console.log('📦 Shutting down servers...');
  server.close();
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('📦 Shutting down servers...');
  server.close();
  viteProcess.kill('SIGINT');
});