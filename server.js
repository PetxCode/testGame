const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
const DB = "mongodb://localhost:gameChanger";
const port = process.env.PORT || 4400;
const app = express();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database has been connected successfully...!`);
  });

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`server is listening port: ${port} `);
});
