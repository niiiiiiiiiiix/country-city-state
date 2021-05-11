const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Welcome!");
});

let corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
};
const cors = require("cors");
app.use(cors(corsOptions));

const allRouter = require("./routes/all.route");
app.use("/all", allRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
