import { Router } from "express";
import { UserController } from "../../controllers/UserController";

const router: Router = Router();

router.put("/:id", UserController.putUserById);
router.get("/:id", UserController.getUserById);

export default router;
