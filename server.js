const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");
const Text = require("./models/textSchema");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;

db()
  .then(() => console.log("Connected to DB"))
  .catch(error => console.log(error));

app.post("/", async (req, res) => {
  try {
    const text = new Text({ text: req.body.text });
    await text.save();
    res.status(201).json("Created!");
  } catch (error) {
    res.status(400).json("Error!");
  }
});

app.listen(port);
