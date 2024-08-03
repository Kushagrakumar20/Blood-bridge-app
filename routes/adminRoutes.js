import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { deleteDonarController, getDonarsListController, getHospitalsListController, getOrgListController } from "../controllers/adminController.js";
import { adminmiddleware } from "../middleware/adminMiddleware.js";

// router object
const router = express.Router();

// ROUTES


// GET || DONAR LIST
router.get('/donar-list', authMiddleware,adminmiddleware,getDonarsListController);

// HOSPITAL LIST
router.get('/hospital-list', authMiddleware,adminmiddleware,getHospitalsListController);


// ORGANISATION LIST
router.get('/org-list', authMiddleware,adminmiddleware,getOrgListController);

// ================================================================================

// DELETE DONAR || GET
router.delete('/delete-donar/:id', authMiddleware,adminmiddleware,deleteDonarController);

// Export
export {router};