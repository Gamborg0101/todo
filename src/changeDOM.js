import { CreateProject as Project } from "./createProject";

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
}
