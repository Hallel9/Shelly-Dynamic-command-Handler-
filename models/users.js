const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userID: String,
  money: {type: Number, default: 0, required: true},
  items: {type: Array, default: [], required: true},
  level: {type: Number, default: 0, required: true},
  points: {type: Number, default: 1, required: true},
  boosts: {type:Array, default: []},
  npoints:  {type: Number, default: 500, required: true},
});

module.exports = mongoose.model("user", userSchema);
