import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createInventoryController, getInventoryController, getDonarsControllers, getHospitalController, getOrganisationController, getOrganisationForHospitalController,getInventoryHospitalController, getInventoryDonarController, getRecentInventoryController } from "../controllers/inventoryController.js";

const router = express.Router()


// Routes
// ADD  INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController)


// GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddleware, getInventoryController)

// GET RECENT BLOOD RECORDS
router.get('/get-recent-inventory', authMiddleware, getRecentInventoryController)

// GET HOSPITAL BLOOD RECORDS
router.post('/get-inventory-hospital', authMiddleware, getInventoryHospitalController)

// GET DONAR BLOOD RECORDS
router.post('/get-inventory-donar', authMiddleware, getInventoryDonarController)


// GET DONAR RECORDS
router.get('/get-donars', authMiddleware, getDonarsControllers)

// GET DONAR RECORDS
router.get('/get-hospitals', authMiddleware, getHospitalController)


// GET ORGANISATION RECORDS
router.get('/get-organisation', authMiddleware, getOrganisationController)

// GET ORGANISATION RECORDS
router.get('/get-organisation-for-hospital', authMiddleware, getOrganisationForHospitalController)



export { router };