// Handle hour selection - allows user to select an available time slot
export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove previous selection
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Highlight selected hour
      selected.target.classList.add("hour-selected");
    });
  });
}
