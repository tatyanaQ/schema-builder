import { Router } from "express";

const router = Router();

// use admin check
router.use((req, res, next) => {
  return next();
});

router.get("/", (req, res, next) => {
  return res.send({ success: true, route: "admin" });
});

export const adminRouter = router;
