const express = require("express");
const projectsRouter = express.Router();
const database = require("../db/client");

// projectsRouter.get("/", (req, res) => {
//   database.query("SELECT NOW()", (error, res) => {
//     console.log({
//       error,
//       res,
//     });
//   });
//   res.send("projects page");
// });

projectsRouter.get("/", (req, res) => {
  database
    .query("SELECT * FROM projects")
    .then((data) => res.send(data.rows))
    .catch((err) => req.status(500).send(err.message));
});

projectsRouter.get("/:id", (req, res) => {
//   res.send(console.log("ko"));
    const { id } = req.params;
    const queryStr = {
      text: `SELECT *  FROM projects WHERE id=$1`,
      values: [id],
    };
    database
      .query(queryStr)
      .then((data) => res.json(data.rows))
      .catch((e) => {
        console.log(e);
        res.status(500).send(e.message);
      });
});

projectsRouter.post("/newproject", (req, res) => {
  const { title, tags, img, description, source } = req.body;
  const newProject = {
    text: "INSERT INTO projects(title, tags, img, description, source) VALUES($1, $2, $3, $4, $5) RETURNING *",
    values: [title, tags, img, description, source],
  };

  database
    .query(newProject)
    .then((data) => res.send(data.rows))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = projectsRouter;
