import express from "express";
import dotenv from "dotenv";
import chartsRoutes from "./routes";
import { BASE_ROUTE } from "./utils/Endpoints";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(BASE_ROUTE, chartsRoutes);
app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`Server running on port ${process.env.PORT}`);
});
