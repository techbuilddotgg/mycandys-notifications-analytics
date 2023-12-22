import express from "express";
import { analyticsController } from "../controllers/analyticsController.js";

const router = express.Router();

/**
 * @swagger
 * /analytics/lastCalledEndpoint:
 *   get:
 *     summary: Get the latest accessed endpoint.
 *     responses:
 *       200:
 *         description: Successful response with the latest accessed endpoint.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/lastCalledEndpoint', analyticsController.getLastCalledEndpoint);
/**
 * @swagger
 * /analytics/mostCalledEndpoint:
 *   get:
 *     summary: Get the most called endpoint.
 *     responses:
 *       200:
 *         description: Successful response with the most called endpoint.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/mostCalledEndpoint', analyticsController.mostCalledEndpoint);
/**
 * @swagger
 * /analytics/numberOfCallsPerEndpoint:
 *   get:
 *     summary: Get count of calls for each endpoint.
 *     responses:
 *       200:
 *         description: Successful response with the count of calls for each endpoint.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/numberOfCallsPerEndpoint', analyticsController.numberOfCallsPerEndpoint);
/**
 * @swagger
 * /analytics/updateData:
 *   post:
 *     summary: Update statistics based on a remote service call.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: calledService
 *         required: true
 *         description: The endpoint called by the remote service.
 *         schema:
 *           type: object
 *           properties:
 *             calledService:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful update. Returns updated statistics.
 *       500:
 *         description: Internal Server Error.
 */
router.post('/updateData', analyticsController.updateData);

export default router;