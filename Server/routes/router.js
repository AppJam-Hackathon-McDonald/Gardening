const express = require("express");
const axios = require("axios");
const Garden = require("../models/garden");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const router = express.Router();

router.post("/register", async (req, res) => {
  // create garden
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
  // find garden userName and letters
  const _id = mongoose.Types.ObjectId(req.params.id);
  try {
    const garden = await Garden.findOne({ _id });
    const result = {
      userName: garden.userName,
      letters: garden.letters,
    };
    res.json({ result });
  } catch (e) {
    console.log(e);
  }
});

router.get("/garden/:id/owner", async (req, res) => {
  // find garden userName
  const _id = mongoose.Types.ObjectId(req.params.id);
  try {
    const garden = await Garden.findOne({ _id });
    const result = {
      userName: garden.userName,
    };
    res.json({ result });
  } catch (e) {
    console.log(e);
  }
});

router.get("*", (req, res) => {
  // send all data
  res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
});

module.exports = router;
