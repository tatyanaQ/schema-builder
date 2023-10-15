import { Router, Request, Response } from "express";
import { createCollection } from "./controllers/create-collection";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("Builder!");
});

router.post("/collection", async (req: Request, res: Response) => {
  await createCollection(req.body);
  return res.send();
});
