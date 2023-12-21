import {ApiCallModel} from "../models/apiCall.model.js";

export const analyticsService = {
    async getLastCalledEndpoint() {
        return ApiCallModel.findOne().sort({timestamp: -1});
    },
    async mostCalledEndpoint() {
        return ApiCallModel.aggregate([
            {$group: {_id: '$endpoint', count: {$sum: 1}}},
            {$sort: {count: -1}},
            {$limit: 1}
        ]);
    },
    async numberOfCallsPerEndpoint() {
        return ApiCallModel.aggregate([
            {$group: {_id: '$endpoint', count: {$sum: 1}}},
            {$sort: {_id: 1}}
        ]);
    },
    async updateData(calledService) {
        const apiCall = new ApiCallModel({ endpoint: calledService });
        await apiCall.save();
        return apiCall;
    }
}