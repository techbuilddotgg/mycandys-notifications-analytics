import mongoose from "mongoose";
import dotenv from "dotenv";

export const conn = () => {
    mongoose.connect(process.env.DB_URL, { dbName: 'analytics' }).
    then(r => console.log("Connected to MongoDB.")).
    catch(err => console.log(err));
}