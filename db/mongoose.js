const mongoose = require("mongoose");
const Garden = require("../models/garden");
require("dotenv").config();

mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });

const run = async () => {
  const garden = await Garden.create({
    userName: "김나무",
    password: "1234",
    letters: [
      {
        whoFrom: "김룸메",
        flower: "노란 튤립",
        context: "재미있어요! 재미있어요! 재미있어요!",
      },
      {
        whoFrom: "김룸메",
        flower: "노란 튤립",
        context: "재미있어요! 재미있어요! 재미있어요!",
      },
    ],
  });
  await garden.save();
};

// run();
