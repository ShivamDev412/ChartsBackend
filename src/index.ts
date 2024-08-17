import express from"express";
import dotenv from"dotenv";
import cors from"cors";
import chartsRoutes from"./routes";
import { BASE_ROUTE } from"./utils/Endpoints";
import swaggerJsdoc from"swagger-jsdoc";
import swaggerUi from"swagger-ui-express";

const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Swagger definition 
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chart API",
      version: "1.0.0",
      description: "API documentation for Chart endpoints",
    },
    servers: [
      {
        url: `https://chartsbackend.onrender.com/api/v1`,
      },
    ],
  },
  apis: ["./src/controllers/*.ts", "./src/routes/*.ts"], 
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use(BASE_ROUTE, chartsRoutes);

app.listen(PORT, () => {
  console.clear();
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger documentation available at https://chartsbackend.onrender.com/api-docs`);
});
