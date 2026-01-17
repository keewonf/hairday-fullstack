import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Enviado");
});

// Today date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Load actual date and defines min date
selectedDate.value = inputToday;
selectedDate.min = inputToday;
