import express from "express";
import { analyticsController } from "../controllers/analyticsController.js";

const router = express.Router();

router.get('/lastCalledEndpoint', analyticsController.getLastCalledEndpoint);
router.get('/mostCalledEndpoint', analyticsController.mostCalledEndpoint);
router.get('/numberOfCallsPerEndpoint', analyticsController.numberOfCallsPerEndpoint);
router.post('/updateData', analyticsController.updateData);

export default router;