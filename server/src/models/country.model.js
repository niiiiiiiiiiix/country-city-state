const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  id: Number,
  name: String,
  iso3: String,
  iso2: String,
  phone_code: String,
  capital: String,
  currency: String,
  currency_symbol: String,
  tld: String,
  native: String,
  region: String,
  subregion: String,
  timezones: Array,
  translations: Object,
  latitude: String,
  longitude: String,
  emoji: String,
  emojiU: String,
  states: Array,
});

const countryModel = mongoose.model("Country", countrySchema);
module.exports = countryModel;
