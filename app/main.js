const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((c) => {
  // Handle connection
  console.log('server working')
  
  c.write('hello\r\n');
  c.pipe(c);
});

server.listen(6379, "127.0.0.1");
