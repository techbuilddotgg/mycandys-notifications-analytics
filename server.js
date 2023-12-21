import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { conn } from "./db/conn.js";
import analyticsRouter from "./routes/analyticsRoutes.js";


const app = express();
const port = 3000 || process.env.PORT;
conn();

app.use(cors());
app.use(express.json());

app.use("/analytics", analyticsRouter);

app.use((err, _req, res, next) => {
    res.status(500).send("An unexpected error occurred.")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});