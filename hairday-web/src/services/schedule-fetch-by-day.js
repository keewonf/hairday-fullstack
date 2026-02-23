// Fetch schedules for a specific date from API
import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fetch all schedules from API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    // Filter schedules for the selected date
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"),
    );
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
