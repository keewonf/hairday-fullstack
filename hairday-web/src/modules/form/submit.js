// Handle form submission for creating new schedules
import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Submit new schedule on form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Validate client name
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Validate hour selection
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora!");
    }

    // Extract hour from selected element and create schedule datetime
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Save new schedule to API
    await scheduleNew({ name, when });

    // Refresh schedules list
    await schedulesDay();

    // Clear form
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});

// Initialize date input with today's date and prevent selecting past dates
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;
