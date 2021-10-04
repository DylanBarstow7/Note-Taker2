import { Router } from "express";
import fs from "fs";
import { nanoid } from "nanoid";
import db from "../db/server.js";

const router = new Router();

console.log(db);

router.get("/notes", (req, res) => {
  fs.readFile("./app/db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  const obj = {
    id: nanoid(4),
    title: req.body.title,
    text: req.body.text,
  };
  fs.readFile("./app/db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    const db = JSON.parse(data);
    db.push(obj);
    fs.writeFile("./app/db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      return res.json(db);
    });
  });
});

// router.delete("/notes/:id", (req, res) => {
//   db.remove(req.params.id)

export default router;
