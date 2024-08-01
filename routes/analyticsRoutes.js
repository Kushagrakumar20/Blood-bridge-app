import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { bloodGroupDetailsController } from "../controllers/analyitcsController.js";

const router = express.Router();


// Routes
// ADD  INVENTORY || POST
router.get('/bloodGroups-data', authMiddleware, bloodGroupDetailsController)





export { router };