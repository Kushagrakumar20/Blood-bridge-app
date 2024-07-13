import express from 'express';
import { testController } from '../controllers/testControllers.js'; // Ensure the file extension is included

// router object
const router = express.Router();

// routes
router.get('/', testController);

export { router };
