type Schedule = {
  id: string;
  name: string;
  when: Date;
};

const schedules: Schedule[] = [];

class SchedulesRepository {
  create(data: Schedule) {
    schedules.push(data);
  }

  findByDate(date: string) {
    return schedules.filter((schedule) => {
      const scheduleDate = schedule.when.toISOString().split("T")[0];
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
