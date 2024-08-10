import { Request, Response } from "express";
import { SankeyChartData } from "../utils/Constant";
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
}
export default ChartController;
