require("dotenv").config();
const express = require("express");
const stackRouter = require("./routes/stack");
const projectsRouter = require("./routes/projects");
const contactRouter = require("./routes/contact");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use("/contact", contactRouter);
app.use("/stack", stackRouter);
app.use("/projects", projectsRouter);
app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
