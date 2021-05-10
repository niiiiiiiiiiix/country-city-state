const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Welcome!");
});

const countryRouter = require("./routes/country.route");
app.use("/country", countryRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
