const mongoose = require("mongoose");
const textSchema = new mongoose.Schema({
  text: String,
});

const Text = mongoose.model("Text", textSchema);
module.exports = Text;
