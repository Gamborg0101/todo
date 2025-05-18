import { Project as Project } from "./changeDOM";

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
      console.log("Project from init", project);
      project.renderProjectElement();
    });
  });
}
export function handleTodoForm() {
  /* Target new form, that gets user input. */
}

export function toDoButtonModal() {
  const todoButton = document.getElementById("todo-button");
  const todoModal = document.getElementById("todo-modal-container");
  todoButton.addEventListener("click", () => {
    if (todoModal.style.display === "block") {
      todoModal.style.display = "none";
    } else {
      todoModal.style.display = "block";
    }
  });
}
