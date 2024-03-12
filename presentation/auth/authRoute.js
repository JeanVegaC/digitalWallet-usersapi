import express from "express";
import { authenticate } from "../../application/controllers/auth/authController.js";
import { validateUser } from "../../application/middlewares/validateUser.js";
import { catchedAsync } from "../../application/utils/catchedAsync.js";

const router = express.Router();

router.post('/auth', validateUser, catchedAsync(authenticate))

export default router;