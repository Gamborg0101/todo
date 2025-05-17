import { CreateProject as Project } from "./createProject";

export function changeDOM() {
  /* Toggle and hide modal */
  const taskButton = document.getElementById("create-task-button");
  const projectModal = document.getElementById("modal-container");

  taskButton.addEventListener("click", () => {
    if (projectModal.style.display === "block") {
      projectModal.style.display = "none";
    } else {
      projectModal.style.display = "block";
    }
  });
}

/* Get information from form to setup new div moduls. */
export function handleProjectFormSubmit() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("project-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("title-input").value;

      const project = new Project(title);
      project.renderProjectElement();
    });
  });

  /* Active and deactivate selected element - page switch */
  const selected = document.getElementsByClassName("titleElement");
}
