import express from "express";
import type { Request, Response, NextFunction } from "express";
import { routes } from "./routes/index.js";
import { AppError } from "./utils/app-error.js";
import { z, ZodError } from "zod";
import cors from "cors";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use(routes);

app.use((error: any, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  if (error instanceof ZodError) {
    return res
      .status(400)
      .json({ message: "Validation error!", issues: z.treeifyError(error) });
  }

  return res.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
