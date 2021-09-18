const express = require("express");
const cors = require("cors");
const compress = require("compression");

const app = express();

app.use(express.json());
app.use(cors());
app.use(compress());
app.use(
  express.static("build", {
    maxAge: 86400000, // 1 day
  })
);

module.exports = app;
