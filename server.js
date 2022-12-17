const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// routing
const indexRouter = require("./routes/router");
require("./db/mongoose");

const PORT = process.env.PORT || 8080;

// view setting
app.use(express.static(path.join(__dirname, "Client/build")));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

// app.use("/", indexRouter);

app.listen(PORT, function () {
  console.log("listening on 8080");
});

module.exports = app;
