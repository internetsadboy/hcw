const http = require('http');

// Define the server's port
// ie PORT=80 node server.js
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello cruel world.');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
