import mongoose from "mongoose";

export const apiCallSchema = new mongoose.Schema({
    endpoint: String,
    timestamp: { type: Date, default: Date.now },
});