import type { Request, Response } from "express";
import { SchedulesRepository } from "../repositories/schedules-repository.js";
import z from "zod";
import { AppError } from "../utils/app-error.js";

class SchedulesController {
  private schedulesRepository = new SchedulesRepository();
  index = (req: Request, res: Response) => {
    const { date } = req.query;

    let schedules;

    if (!date) {
      schedules = this.schedulesRepository.findAll();
    } else if (typeof date === "string") {
      schedules = this.schedulesRepository.findByDate(date);
    } else {
      throw new AppError("Data inválida");
    }

    return res.json(schedules);
  };

  create = (req: Request, res: Response) => {
    const bodySchema = z.object({
      name: z.string().trim().min(1, "Name must have at least 1 character"),
      when: z.iso.datetime({
        message: "Invalid datetime format",
      }),
    });

    const { name, when } = bodySchema.parse(req.body);

    const schedule = {
      id: crypto.randomUUID(),
      name,
      when: new Date(when),
    };

    this.schedulesRepository.create(schedule);

    return res.status(201).json(schedule);
  };

  remove = (req: Request, res: Response) => {
    const paramsSchema = z.object({
      id: z.uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    this.schedulesRepository.delete(id);

    return res.status(204).send();
  };
}

export { SchedulesController };
