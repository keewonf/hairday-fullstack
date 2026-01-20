// Load schedules for today when the page loads
import { schedulesDay } from "./schedules/load.js";

document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display today's schedules on page load
  schedulesDay();
});
