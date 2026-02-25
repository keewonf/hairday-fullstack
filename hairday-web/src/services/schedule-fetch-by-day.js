// Fetch schedules for a specific date from API
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fetch all schedules from API
    const response = await fetch(`${apiConfig.baseURL}/schedules?date=${date}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
