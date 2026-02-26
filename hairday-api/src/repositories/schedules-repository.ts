import { AppError } from "../utils/app-error.js";

type Schedule = {
  id: string;
  name: string;
  when: Date;
};

const schedules: Schedule[] = [];

class SchedulesRepository {
  create(data: Schedule) {
    const alreadyTaken = schedules.some(
      (schedule) => schedule.when.getTime() === data.when.getTime(),
    );
    if (alreadyTaken) throw new AppError("Horário já ocupado");

    schedules.push(data);
  }

  findAll() {
    return schedules;
  }

  findByDate(date: string) {
    return schedules.filter((schedule) => {
      const scheduleDate = schedule.when.toLocaleDateString("en-CA");
      return scheduleDate === date;
    });
  }

  delete(id: string) {
    const index = schedules.findIndex((schedule) => {
      return schedule.id === id;
    });

    if (index !== -1) {
      schedules.splice(index, 1);
    }
  }
}

export { SchedulesRepository };
