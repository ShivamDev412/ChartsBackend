import { Request, Response } from "express";
import {
  DonutChartData,
  SankeyChartData,
  ScatterPlotData,
  StreamGraphData,
  WordCloudData,
} from "../utils/Constant";
class ChartController {
  constructor() {}
  getSankeyChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: SankeyChartData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
  getDonutChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: DonutChartData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
  getWordCloud(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: WordCloudData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
  getStackedGraph(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: StreamGraphData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
  getLineChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: StreamGraphData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
  getScatterPlot(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: ScatterPlotData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}
export default ChartController;
