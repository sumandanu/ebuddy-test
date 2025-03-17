import { Router } from "express";
import { UserController } from "../../controllers/UserController";
import { authenticate } from "../../middleware/authMiddleware";

const router: Router = Router();

router.post("/register", UserController.registerUser);
router.post("/signin", UserController.signin);
router.get("/me", authenticate, UserController.getUserByAccessToken);

export default router;
