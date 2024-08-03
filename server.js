import express from 'express';
import { router as testRouter } from './routes/testRoutes.js'; 
import { router as authRouter } from './routes/authRoutes.js';
import { router as inventoryRouter } from './routes/inventoryRoutes.js';
import { router as analyticsRouter } from './routes/analyticsRoutes.js';
import { router as adminRouter } from './routes/adminRoutes.js';

import { config as configDotenv } from 'dotenv';
import morgan from 'morgan';
// import mongoose from "mongoose";
import cors from 'cors';
import colors from 'colors';
import { connectDB } from './config/db.js';

configDotenv();


// mongodb connection
connectDB();

// rest object
const app = express();


// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


// Routes
// 1 test route
app.use('/api/v1/test', testRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/inventory', inventoryRouter);
app.use('/api/v1/analytics', analyticsRouter);
app.use('/api/v1/admin', adminRouter);


// port
const PORT = process.env.PORT || 8080;



// listen 
app.listen(PORT, () => {
    console.log(`Node server is running in ${process.env.DEV_MODE} ModeOn port ${process.env.PORT}`.bgBlue.white);
});
