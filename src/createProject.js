export class CreateProject {
  constructor(title) {
    this.title = title;
  }

  resetInputFields() {
    const projectModal = document.getElementById("modal-container");
    document.getElementById("title-input").value = "";
    projectModal.style.display = "none";
  }

  renderProjectElement() {
    const container = document.getElementById("task-container");
    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("p");
    const buttonDiv = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    const taskList = document.getElementById("task-list");

    buttonDiv.class = "buttonDiv";

    editButton.innerText = "Edit";
    editButton.className = "editButton";
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    createNewContainer.className = "newContainers";

    buttonDiv.className = "buttonDiv";

    /* Functionality for delete button */
    deleteButton.addEventListener("click", () => {
      createNewContainer.remove();
    });

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(buttonDiv);
    taskList.appendChild(createNewContainer);

    this.resetInputFields();
  }

  setTitleAndDescription() {
    this.renderProjectElement();
  }
}
