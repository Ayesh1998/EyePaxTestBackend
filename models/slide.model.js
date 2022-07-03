const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//creating slide schema
const SlideSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    subTitle: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

//creating a model and exports it
module.exports = mongoose.model("Slide", SlideSchema);