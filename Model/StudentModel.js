const mongoose = require("mongoose");

// 1- create Object from mongoose Schema
const schema = new mongoose.Schema({
  _id: Number,
  // userName:String,
  userName: { type: String, require: true },
  password: String,
  department: { type: Number, ref: "departments" }, // ref:"collectionName"
});
//2-mapping
module.exports = mongoose.model("students", schema);
