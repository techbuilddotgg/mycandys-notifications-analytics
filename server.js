import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { conn } from "./db/conn.js";
import analyticsRouter from "./routes/analyticsRoutes.js";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000 || process.env.PORT;
conn();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Notifications analytics API',
            version: '1.0.0',
            description: 'API documentation',
        },
        externalDocs: {
            url: "/swagger.json"
        },
    },
    apis: ['server.js', './routes/analyticsRoutes.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
app.get('/v3/api-docs', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/analytics", analyticsRouter);

app.use((err, _req, res, next) => {
    res.status(500).send("An unexpected error occurred.")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check if the service is running.
 *     responses:
 *       200:
 *         description: Service is running.
 *       500:
 *         description: Service is not running.
 */
app.get('/health', async (req, res) => {
    res.status(200).json('Api is up and running');
});