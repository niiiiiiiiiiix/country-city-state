const Country = require("../models/country.model");

const getAllCountries = async (next) => {
  try {
    const countries = await Country.find();
    return countries;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCountries,
};
