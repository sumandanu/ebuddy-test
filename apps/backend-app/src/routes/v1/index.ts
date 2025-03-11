import { Router } from "express";

import usersApi from "./users";

const router: Router = Router();

router.use("/users", usersApi);

export default router;
