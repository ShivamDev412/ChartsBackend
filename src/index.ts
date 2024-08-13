import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chartsRoutes from "./routes";
import { BASE_ROUTE } from "./utils/Endpoints";
const PORT = 4000;
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(BASE_ROUTE, chartsRoutes);
app.listen(PORT, () => {
  console.clear();
  console.log(`Server running on port ${PORT}`);
});
