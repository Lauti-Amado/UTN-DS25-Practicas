import { Router } from "express";
import { runSeed } from "../controllers/seed.controller";

const router = Router();

router.get("/", runSeed);

export const seedRoutes = router;
