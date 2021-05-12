const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
env.config();
const DB = "mongodb://localhost:gameChanger";
const DB_ONLINE =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/shotkodeDB?retryWrites=true&w=majority";

const port = process.env.PORT || 4400;
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fileRoutes = require("./routes/file-upload-routes");

mongoose
  .connect(DB_ONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database has been connected successfully...!`);
  });

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("Your quest for this API is ready!");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", fileRoutes.routes);

app.listen(port, () => {
  console.log(`server is listening port: ${port} `);
});
