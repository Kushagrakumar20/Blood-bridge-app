import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createInventoryController, getInventoryController, getDonarsControllers, getHospitalController, getOrganisationController } from "../controllers/inventoryController.js";

const router = express.Router()


// Routes
// ADD  INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController)


// GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)


// GET DONAR RECORDS
router.get('/get-donars', authMiddleware, getDonarsControllers)

// GET DONAR RECORDS
router.get('/get-hospitals', authMiddleware, getHospitalController)


// GET ORGANISATION RECORDS
router.get('/get-organisation', authMiddleware, getOrganisationController)



export { router };