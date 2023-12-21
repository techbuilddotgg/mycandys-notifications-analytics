import { analyticsService } from "../services/analytiscService.js";

export const analyticsController = {
    async getLastCalledEndpoint(req, res) {
        try {
            const analytics = await analyticsService.getLastCalledEndpoint();
            res.status(200).send(analytics);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async mostCalledEndpoint(req, res) {
        try {
            const analytics = await analyticsService.mostCalledEndpoint();
            res.status(200).send(analytics);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async numberOfCallsPerEndpoint(req, res) {
        try {
            const analytics = await analyticsService.numberOfCallsPerEndpoint();
            res.status(200).send(analytics);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async updateData(req, res) {
        try {
            const analytics = await analyticsService.updateData();
            res.status(200).send(analytics);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}