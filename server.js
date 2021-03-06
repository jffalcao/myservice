const http = require('http');

// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('\nService: myservice is up and running correctly!\n\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
