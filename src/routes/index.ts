import express from "express";
import ChartController from "../controllers/Chart.controller";
import ENDPOINTS from "../utils/Endpoints";
const routes = express.Router();
const chartController = new ChartController();
routes.get(ENDPOINTS.SANKEY, chartController.getSankeyChart);
export default  routes;
