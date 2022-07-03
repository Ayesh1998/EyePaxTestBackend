const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const UserRoutes = require("./routes/slide.routes");

require("dotenv").config();

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", UserRoutes);

const uri = process.env.ATLAS_URI;
const port = process.env.PORT;
const dbName = process.env.DATABASE;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port);
    console.log(`Server is running on port: ${port}`);
  })
  .catch((error) => {
    console.log(error);
  });
