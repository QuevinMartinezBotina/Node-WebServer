const express = require("express");
const { render } = require("express/lib/response");
const hbs = require("hbs");
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//Hnadlerbars
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log(err);
});

//Servir content static
app.use(express.static("public/landingpage"));

app.get("/", (req, res) => {
  res.render("home", { nombre: "Santiago Martinez", titulo: "Curso de node" });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Santiago Martinez",
    titulo: "Curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Santiago Martinez",
    titulo: "Curso de node",
  });
});

app.get("*", (rep, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
