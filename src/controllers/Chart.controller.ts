import { Request, Response } from"express";
import {
  DonutChartData,
  SankeyChartData,
  ScatterPlotData,
  StreamGraphData,
  WordCloudData,
} from"../utils/Constant";

class ChartController {
  constructor() {}

  /**
   * @swagger
   * /charts/sankey:
   *   get:
   *     summary: Get Sankey chart data
   *     responses:
   *       200:
   *         description: Successfully retrieved Sankey chart data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getSankeyChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: SankeyChartData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  /**
   * @swagger
   * /charts/donut:
   *   get:
   *     summary: Get Donut chart data
   *     responses:
   *       200:
   *         description: Successfully retrieved Donut chart data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getDonutChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: DonutChartData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  /**
   * @swagger
   * /charts/word-cloud:
   *   get:
   *     summary: Get Word Cloud data
   *     responses:
   *       200:
   *         description: Successfully retrieved Word Cloud data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getWordCloud(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: WordCloudData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  /**
   * @swagger
   * /charts/stacked-area:
   *   get:
   *     summary: Get Stacked Graph data
   *     responses:
   *       200:
   *         description: Successfully retrieved Stacked Graph data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getStackedGraph(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: StreamGraphData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  /**
   * @swagger
   * /charts/line:
   *   get:
   *     summary: Get Line chart data
   *     responses:
   *       200:
   *         description: Successfully retrieved Line chart data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getLineChart(req: Request, res: Response) {
    try {
      res.status(200).send({
        success: true,
        data: StreamGraphData,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  /**
   * @swagger
   * /charts/scatter-plot:
   *   get:
   *     summary: Get Scatter Plot data
   *     responses:
   *       200:
   *         description: Successfully retrieved Scatter Plot data
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                 data:
   *                   type: object
   *       500:
   *         description: Internal server error
   */getScatterPlot(req: Request, res: Response) {
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
