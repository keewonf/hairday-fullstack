import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById("date");

// Main function to fetch and render schedules for selected date
export async function schedulesDay() {
  const date = selectedDate.value;

  // Fetch all schedules for selected date from API
  const dailySchedules = await scheduleFetchByDay({ date });

  // Display schedules organized by time period
  schedulesShow({ dailySchedules });

  // Load and display available hours
  hoursLoad({ date, dailySchedules });
}
