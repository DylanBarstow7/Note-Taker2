import { Router } from "express";
import fs from "fs";
import db from "../db/server.js";

const router = new Router();

console.log(db);

router.get("/notes", (req, res) => {
  fs.readFile("./app/db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

router.post("/notes", ({ body }, res) => {
  db.create(body);
  res.status(201).send("Note Created.");
});

// router.delete("/notes/:id", (req, res) => {
//   db.remove(req.params.id)

export default router;
