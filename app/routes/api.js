import { Router } from "express";
import db from "../db/server.js";

const router = new Router();

router.get("/notes", async (req, res) => {
  const notes = await db.index();
  res.status(200).json(notes);
});

router.post("/notes", ({ body }, res) => {
  db.create(body);
  res.status(201).send("Note Created.");
});

// router.delete("/notes/:id", (req, res) => {
//   db.remove(req.params.id)

export default router;
