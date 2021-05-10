const express = require("express");
const country = express.Router();
const ctrl = require("../controllers/country.controller");

country.get("/", async (req, res, next) => {
  try {
    const countries = await ctrl.getAllCountries(next);
    res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
});

country.get("/:country", async (req, res, next) => {
  try {
    const country = await ctrl.getSpecificCountry(req.params.country, next);
    res.status(200).json(country);
  } catch (error) {
    next(error);
  }
});

// country.get("/:country/:state", async (req, res, next) => {
//   try {
//     const countryStates = await ctrl.getSpecificCountry(
//       req.params.country,
//       next
//     );
//     res.status(200).json(countryStates);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = country;
