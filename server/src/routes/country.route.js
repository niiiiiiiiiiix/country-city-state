const express = require("express");
const country = express.Router();
const ctrl = require("../controllers/country.controller");

country.get("/", async (req, res, next) => {
  try {
    const countries = await ctrl.getAllCountries();
    console.log(countries);
    res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
});

module.exports = country;
