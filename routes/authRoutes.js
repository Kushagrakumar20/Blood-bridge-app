import express from "express";
import { currentUserController, loginController, registerController } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router()

// routes
// REGISTER || POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// GET CURRENT USER || GET
router.get('/current-user', authMiddleware, currentUserController);


export {router};