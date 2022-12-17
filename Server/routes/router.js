const express = require("express");
const axios = require("axios");
const Garden = require("../models/garden");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const router = express.Router();

router.get("/hello", async (req, res) => {
  const json = await Garden.find();

  res.json(json);
});

router.get("*", (req, res) => {
  // send all data
  res.sendFile(path.join(__dirname, "../../Client/build/index.html"));
});

module.exports = router;
