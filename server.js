console.log("hello world");
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "./index.html";

  if (req.url === "/style.css") {
    filePath = "./style.css";
    res.setHeader("Content-Type", "text/css");
  } else if (req.url === "/calculater.js") {
    filePath = "./calculater.js";
    res.setHeader("Content-Type", "application/javascript");
  } else {
    res.setHeader("Content-Type", "text/html");
  }

  fs.readFile(path.join(__dirname, filePath), (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
      return;
    }
    res.writeHead(200);
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});