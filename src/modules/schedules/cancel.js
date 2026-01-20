// Handle schedule cancellation when user clicks cancel icon
import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

// Add click listener to period containers
periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("cancel-icon")) {
      return;
    }

    // Get schedule ID from closest list item
    const item = e.target.closest("li");
    const { id } = item.dataset;

    if (id) {
      // Confirm cancellation before proceeding
      const isConfirm = confirm(
        "Tem certeza que deseja cancelar esse agendamento?",
      );

      if (isConfirm) {
        // Cancel schedule and refresh list
        await scheduleCancel({ id });
        schedulesDay();
      }
    }
  });
});
