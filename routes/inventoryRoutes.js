import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createInventoryController, getInventoryController } from "../controllers/inventoryController.js";

const router = express.Router()


// Routes
// ADD  INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController)


// GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)


export { router };