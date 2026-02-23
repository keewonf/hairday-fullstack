const date = document.getElementById("date");
const client = document.getElementById("client");
const ul = document.getElementById("hours");
const form = document.querySelector("form");

ul.addEventListener("click", (e) => {
  handleHourSelected(e.target);
});

function handleHourSelected(element) {
  if (
    !element.classList.contains("hour") ||
    !element.classList.contains("hour-available")
  ) {
    return;
  }

  const selected = document.querySelector(".hour-selected");

  if (selected) {
    selected.classList.remove("hour-selected");
  }

  element.classList.add("hour-selected");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const selected = document.querySelector(".hour-selected");
  if (!date.value || !client.value || !selected) {
    return;
  }
  try {
    const schedules = {
      date: date.value,
      client: client.value,
      hour: selected.textContent.trim(),
    };

    const response = await fetch("http://localhost:8080/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schedules),
    });

    if (!response.ok) {
      throw new Error("Erro ao salvar agendamento");
    }

    const data = await response.json();
    console.log("Agendamento salvo:", data);

    form.reset();
    if (selected) {
      selected.classList.remove("hour-selected");
    }
  } catch (error) {
    console.log(error);
  }
});
