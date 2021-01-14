const mongoose = require("mongoose");

const boostSchema = mongoose.Schema({
  booster: String,
  endtime: {type: Date, required: true},
  type: String
});

module.exports = mongoose.model("boosters", boostSchema);
