const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

//Servir content static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/"));
});

app.get("/helloworld", (req, res) => {
  res.send("Hello world in route");
});

/* Serving the landing page. */
app.get("/landingpage", (req, res) => {
  res.sendFile(path.join(__dirname, "public/landingpage/home.html"));
});

app.get("/landingpage/generic", (req, res) => {
  res.sendFile(path.join(__dirname, "public/landingpage/generic.html"));
});

app.get("/landingpage/elements", (req, res) => {
  res.sendFile(path.join(__dirname, "public/landingpage/elements.html"));
});

app.get("*", (rep, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
