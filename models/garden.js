const mongoose = require("mongoose");

const gardenSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      maxLength: 15,
    },
    password: {
      type: String,
      required: true,
      maxLength: 4,
      trim: true,
    },
    letters: [
      {
        whoFrom: {
          type: String,
        },
        flowerType: {
          type: String,
        },
        context: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Garden = mongoose.model("garden", gardenSchema);

module.exports = Garden;
