// Import the http module
const http = require('http');

// Define the server's port
// ie PORT=80 node server.js
const PORT = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Log the request method and URL
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle different routes
  if (req.url === '/') {
    res.end('hello cruel world.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
