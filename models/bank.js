const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
  userID: String,
  money: {type: Number, default: 0, required: true},
  max: {type: Number, default: 500, required: true},
});

module.exports = mongoose.model("bank", bankSchema);
