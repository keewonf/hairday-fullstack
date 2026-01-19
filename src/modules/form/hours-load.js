import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"),
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // Render schedules
  opening.forEach(({ hour, available }) => {
    const period = getPeriod(hour);
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    li.dataset.period = period;
    li.setAttribute("value", hour);

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "14:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.appendChild(li);
  });

  hoursClick();
}

function getPeriod(hour) {
  const h = Number(hour.split(":")[0]);

  if (h <= 12) return "morning";
  if (h <= 17) return "afternoon";
  return "night";
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
