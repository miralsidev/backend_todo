const mongoose = require("mongoose");
const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  path: {
    type: String,
    require: true,
  },
  filename: {
    type: String,
    require: true,
  },
});
const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = {ToDo};
