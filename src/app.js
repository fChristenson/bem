const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

module.exports = app;
