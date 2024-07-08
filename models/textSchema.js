const mongoose = require("mongoose");
const textSchema = new mongoose.Schema(
  {
    text: String,
  },
  { timestamps: true }
);

const Text = mongoose.model("Text", textSchema);
module.exports = Text;
