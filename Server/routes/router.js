const express = require("express");
const axios = require("axios");
const Garden = require("../models/garden");
const mongoose = require("mongoose");
const path = require("path");
const { route } = require("../server");
require("dotenv").config();
const router = express.Router();

router.post("/register", async (req, res) => {
  const garden = new Garden({
    userName: req.body.userName,
    password: req.body.password,
    letters: [],
  });
  try {
    await garden.save();
    const id = mongoose.Types.ObjectId(garden.id);
    res.json({
      result: {
        id,
      },
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/garden/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  console.log();
});

router.get("/:id", async (req, res) => {
  //
});

router.get("*", (req, res) => {
  // send all data
  res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
});

module.exports = router;
