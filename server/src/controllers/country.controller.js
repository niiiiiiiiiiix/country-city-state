const Country = require("../models/country.model");

const getAllCountries = async (next) => {
  try {
    const countries = await Country.find();
    const countriesNames = countries.map((countries) => {
      return countries.name;
    });
    return countriesNames;
  } catch (error) {
    next(error);
  }
};

const getSpecificCountry = async (id, next) => {
  try {
    const country = await Country.findOne({ id: id });
    const countryName = country.name;
    return countryName;
  } catch (error) {
    next(error);
  }
};

// const getAllStatesSpecificToCountry = async (id, next) => {
//   try {
//     const countries = await Country.find({ id: id });
//     const countryStates = country.states;
//     return countryStates;
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  getAllCountries,
  getSpecificCountry,
};
