import { Router } from "express";


const router = new Router();
router.get("/notes", async (req, res) => {
  const notes = await db.index();
  return res.status(200).json(notes);
});


