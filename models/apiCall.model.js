import mongoose from "mongoose";
import { apiCallSchema } from "../schemas/apiCall.schema.js";

export const ApiCallModel = mongoose.model("apiCall", apiCallSchema);
