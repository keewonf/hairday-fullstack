import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("Enviado");

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora!");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await scheduleNew({ id, name, when });

    await schedulesDay();

    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
});

// Today date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Load actual date and defines min date
selectedDate.value = inputToday;
selectedDate.min = inputToday;
