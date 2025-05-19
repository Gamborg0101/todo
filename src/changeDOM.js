export class Project {
  constructor(title) {
    this.title = title;
    this.active = false;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  resetInputFields() {
    const projectModal = document.getElementById("modal-container");
    document.getElementById("title-input").value = "";
    projectModal.style.display = "none";
  }

  renderProjectElement() {
    const projectContainer = document.getElementById("project-container");
    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    /* Functionality for delete button */
    deleteButton.addEventListener("click", () => {
      createNewContainer.remove();
    });

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    createNewContainer.classList.add("single-project");

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(deleteButton);

    projectContainer.appendChild(createNewContainer);

    this.resetInputFields();
  }

  renderTodoElement() {
    /* */
  }

  setTodoElement() {
    this.renderTodoElement();
  }

  setTitleAndDescription() {
    this.renderProjectElement();
  }
}
