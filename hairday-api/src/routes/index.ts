import { Router } from "express";
import { schedulesRoutes } from "./schedules-routes.js";

const routes = Router();

routes.use("/schedules", schedulesRoutes);

export { routes };
