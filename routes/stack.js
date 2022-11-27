const express = require("express");
const stackRouter = express.Router();

stackRouter.get("/", (req, res) => {
  res.send("stack page");
});

module.exports = stackRouter;
