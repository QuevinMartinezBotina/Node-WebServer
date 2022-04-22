const http = require("http");

http
  .createServer((request, response) => {
    console.log(request);
    response.write("Hello world");
    response.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
