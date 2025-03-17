import { Router } from "express";

import authRouter from "./authRoutes";
import usersRouter from "./userRoutes";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);

export default router;
