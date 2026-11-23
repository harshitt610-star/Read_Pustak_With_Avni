const http = require('http');

const PORT = 3001;
const TARGET_PORT = 3000;

const server = http.createServer((req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: `localhost:${TARGET_PORT}`
    }
  };

  const proxy = http.request(options, (targetRes) => {
    res.writeHead(targetRes.statusCode, targetRes.headers);
    targetRes.pipe(res, { end: true });
  });

  proxy.on('error', (err) => {
    console.error(`Proxy error for ${req.url}:`, err.message);
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Proxy connecting to dev server...');
  });

  req.pipe(proxy, { end: true });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Forwarding localhost:${PORT} -> localhost:${TARGET_PORT}`);
});
