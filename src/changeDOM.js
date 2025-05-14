import { CreateProject } from "./createProject";

export function changeDOM() {
  const taskButton = document.getElementById("create-task-button");
  const projectModal = document.getElementById("modal-container");

  /* Toggle and hide modal */
  taskButton.addEventListener("click", () => {
    if (projectModal.style.display === "block") {
      projectModal.style.display = "none";
    } else {
      projectModal.style.display = "block";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("project-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}
