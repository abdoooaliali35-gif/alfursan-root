#!/usr/bin/env node

/**
 * Universal deployment server for Al Fursan
 * Automatically detects and fixes port configuration issues
 * Works with all Replit deployment modes (Autoscale, Reserved VM, etc.)
 */

const { spawn } = require('child_process');
const http = require('http');

// Detect deployment environment
const isDeployment = process.env.REPLIT_DEPLOYMENT || process.env.NODE_ENV === 'production';
const deploymentPort = process.env.PORT || 8080; // Autoscale uses this
const vitePort = 5000; // Internal Vite port

console.log('🚀 Al Fursan Universal Deployment Server');
console.log(`🌍 Environment: ${isDeployment ? 'Deployment' : 'Development'}`);
console.log(`📡 External Port: ${deploymentPort}`);
console.log(`⚙️  Vite Port: ${vitePort}`);

// Start Vite preview server
console.log('🔧 Starting Vite preview server...');
const viteProcess = spawn('npx', [
  'vite', 'preview', 
  '--host', '0.0.0.0', 
  '--port', vitePort.toString(),
  '--strictPort'
], {
  stdio: 'pipe',
  env: { ...process.env, NODE_ENV: 'production' }
});

let viteReady = false;

viteProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('Vite:', output);
  if (output.includes('Local:') || output.includes('ready')) {
    viteReady = true;
    console.log(`✅ Vite server ready on port ${vitePort}`);
  }
});

viteProcess.stderr.on('data', (data) => {
  const error = data.toString();
  if (!error.includes('Warning') && !error.includes('deprecated')) {
    console.error('Vite error:', error);
  }
});

// Create proxy server for deployment port
const server = http.createServer((req, res) => {
  // Health check for Autoscale
  if (req.url === '/health' || req.url === '/_replit/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ 
      status: 'healthy',
      viteReady,
      deployment: isDeployment,
      ports: { external: deploymentPort, internal: vitePort },
      timestamp: new Date().toISOString()
    }));
  }

  // Show loading page if Vite not ready
  if (!viteReady) {
    res.writeHead(200, { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    return res.end(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
        <head>
          <meta charset="utf-8">
          <title>تحميل موقع الفرسان</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                   text-align: center; padding: 50px; background: #f8f9fa; }
            .loading { animation: spin 1s linear infinite; display: inline-block; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          </style>
        </head>
        <body>
          <h1>🚀 جاري تحميل موقع الفرسان...</h1>
          <div class="loading">⏳</div>
          <p>يرجى الانتظار لحظات...</p>
          <script>setTimeout(() => location.reload(), 3000);</script>
        </body>
      </html>
    `);
  }
  
  // Proxy all requests to Vite server
  const proxyReq = http.request({
    hostname: 'localhost',
    port: vitePort,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      'x-forwarded-for': req.connection.remoteAddress,
      'x-forwarded-proto': 'https',
      'x-forwarded-host': req.headers.host
    }
  }, (proxyRes) => {
    // Pass through all headers
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    console.error('Proxy error:', err.message);
    res.writeHead(502, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
        <head><meta charset="utf-8"><title>خطأ مؤقت</title></head>
        <body style="text-align: center; padding: 50px;">
          <h1>⚠️ خطأ مؤقت في الخادم</h1>
          <p>جاري إعادة المحاولة...</p>
          <script>setTimeout(() => location.reload(), 2000);</script>
        </body>
      </html>
    `);
  });

  // Forward request body if present
  req.pipe(proxyReq, { end: true });
});

// Start server on deployment port
server.listen(deploymentPort, '0.0.0.0', () => {
  console.log(`🌐 Deployment server running on port ${deploymentPort}`);
  console.log(`🔗 Proxying to Vite server on port ${vitePort}`);
  console.log('✅ Ready for all deployment types!');
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`📦 Received ${signal}, shutting down gracefully...`);
  server.close(() => {
    console.log('🔒 HTTP server closed');
    viteProcess.kill('SIGTERM');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Fast startup check
setTimeout(() => {
  if (!viteReady) {
    console.log('⏳ Vite still starting up... (this is normal)');
  }
}, 5000);