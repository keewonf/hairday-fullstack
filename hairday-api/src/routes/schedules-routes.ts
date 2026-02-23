import { Router } from "express";
import { SchedulesController } from "../controllers/schedules-controllers.js";

const schedulesRoutes = Router();
const schedulesController = new SchedulesController();

schedulesRoutes.get("/", schedulesController.index);
schedulesRoutes.post("/", schedulesController.create);

export { schedulesRoutes };
