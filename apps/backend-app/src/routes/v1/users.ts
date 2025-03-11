import { Router } from "express";
import { getUsers } from "../../controllers/users";
import { buildExpressCallback } from "../../helpers/express-callback";

const router: Router = Router();

router.get("/", buildExpressCallback(getUsers));

export default router;
