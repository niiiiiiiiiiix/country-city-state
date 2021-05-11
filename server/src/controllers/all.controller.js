const All = require("../models/all.model");

const getAllData = async (next) => {
  try {
    const all = await All.find();
    const allData = all.map((all) => {
      return {
        id: all.id,
        name: all.name,
        states: all.states,
        iso2: all.iso2,
        emoji: all.emoji,
      };
    });
    return allData;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllData,
};
