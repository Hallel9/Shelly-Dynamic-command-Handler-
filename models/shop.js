const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  item: String,
  price: {type: Number, default: 0, required: true},
  count: {type: Number, default: 0, required: true},
  avilable: {type: Number, default: 100, required: true},
  level: {type: Number, default: 1, required: true},
});

module.exports = mongoose.model("shop", shopSchema);
