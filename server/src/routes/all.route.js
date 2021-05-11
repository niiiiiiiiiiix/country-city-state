const express = require("express");
const all = express.Router();
const ctrl = require("../controllers/all.controller");

all.get("/", async (req, res, next) => {
  try {
    const all = await ctrl.getAllData(next);
    res.status(200).json(all);
  } catch (error) {
    next(error);
  }
});

module.exports = all;
