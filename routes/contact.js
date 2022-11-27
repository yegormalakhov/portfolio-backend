const express = require("express");
const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.send("contact here");
});

module.exports = contactRouter;
