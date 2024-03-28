const mongoose = require("mongoose");

// 1- create Object from mongoose Schema
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, unique: true },
});

//2- mapping
module.exports = mongoose.model("departments", schema);
