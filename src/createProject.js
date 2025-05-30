import { Project } from "./changeDOM";
import { format } from "date-fns";
import { Todo } from "./createTask";

let projectArray = [];

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
      // createProjectRender(project);
      projectArray.push(project);
      console.log("Project from init", project);

      project.renderProjectElement();
    });
  });
}

export function toDoButtonModal() {
  const todoButton = document.getElementById("todo-button");
  const todoModal = document.getElementById("todo-form-border");
  const sectionContainer = document.getElementById("section-container");
  const todoCancelButton = document.getElementById("todo-cancel");

  todoButton.addEventListener("click", () => {
    if (todoModal.style.display == "block") {
      todoModal.style.display = "none";
      sectionContainer.classList.remove("blurred");
    } else {
      todoModal.style.display = "block";
      todoButton.classList.remove("blurred");
      sectionContainer.classList.add("blurred");
    }
  });

  todoCancelButton.addEventListener("click", () => {
    if (sectionContainer.classList == "blurred") {
      todoModal.style.display = "none";
      sectionContainer.classList.remove("blurred");
    }
  });
}

export function handleTodoForm() {
  const todoHTMLContainer = document.getElementById("todo-container");
  const submitButton = document.getElementById("todo-submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const dueDateInput = document.getElementById("duedate");
    const priority = document.querySelector('input[name="priority"]:checked');

    const todoContainer = document.createElement("div");
    const titleElement = document.createElement("p");
    const dueDateElement = document.createElement("p");
    const priorityElement = document.createElement("p");
    const completedButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    if (dueDateInput.value === "") {
      dueDateInput.value = format(new Date(), "yyyy-MM-dd");
    }

    if (titleInput.value === "") {
      titleInput.value = "No title given";
    }

    titleElement.innerHTML = `Title: ${titleInput.value}`;
    dueDateElement.innerHTML = `Duedate: ${dueDateInput.value}`;
    priorityElement.innerHTML = `Priority: ${priority.value}`;
    completedButton.innerHTML = "Completed";
    deleteButton.innerHTML = "Delete";

    todoContainer.classList.add("todo-single-container");

    const todoTask = new Todo(
      titleInput.value,
      dueDateInput.value,
      priority.value,
      false
    );
    const project = new Project();
    project.addTodo(todoTask);
    console.log(project);

    todoContainer.appendChild(titleElement);
    todoContainer.appendChild(dueDateElement);
    todoContainer.appendChild(priorityElement);
    todoContainer.appendChild(completedButton);
    todoContainer.appendChild(deleteButton);

    todoHTMLContainer.appendChild(todoContainer);

    console.log(todoContainer);
  });
}
