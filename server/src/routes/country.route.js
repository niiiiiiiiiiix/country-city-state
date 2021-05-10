const express = require("express");
const country = express.Router();

country.get("/", (req, res, next) => {
  res.send("Welcome!");
});

module.exports = country;
