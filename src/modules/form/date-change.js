// Reload schedules when the user changes the selected date
import { schedulesDay } from "../schedules/load";

const selectedDate = document.getElementById("date");

selectedDate.addEventListener("change", (e) => {
  // Fetch and update schedules for the new date
  schedulesDay();
});
