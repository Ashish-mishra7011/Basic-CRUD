const mongoose = require("mongoose");
//A schema is a structure of data to be stored at DB
const todoSchema = new mongoose.Schema({
  /*these are 4 property of the todo*/
  /*1*/ title: { type: String, required: true, maxLength: 50 },
  /*2*/ description: { type: String, required: true, maxLength: 100 },
  /*3*/ createdAt: { type: Date, require: true, default: Date.now() },
  /*4*/ updatedAt: { type: Date, require: true, default: Date.now() },
  //these are 4 thing which required for completing a Todo.
});
module.exports = mongoose.model("Todo", todoSchema);
