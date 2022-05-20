const http = require("http"); // Import the http module

/* Creating a server and listening on port 8080. */
http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end(); // End the response
  })
  .listen(8080);

console.log("Server running on port 8080");
