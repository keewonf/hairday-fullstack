import type { Request, Response } from "express";
import z from "zod";

class SchedulesController {
  index(req: Request, res: Response) {
    const { date } = req.query;
    res.send(date);
  }

  create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(1, "Name must have at least 1 character"),
      when: z.iso.datetime({
        message: "Invalid datetime format",
      }),
    });

    const { name, when } = bodySchema.parse(req.body);

    res
      .status(201)
      .json(`Parabéns ${name} seu agendamento foi registrado na data ${when}`);
  }

  remove(req: Request, res: Response) {
    res.status(200).json(`Seu produto foi removido`);
  }
}

export { SchedulesController };
