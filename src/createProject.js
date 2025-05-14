export class CreateProject {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  getInfoFromForm() {
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("project-form");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        this.title = document.getElementById("title-input").value;
        this.description = document.getElementById("description-input").value;

        this.setTitleAndDescription();
      });
    });
  }

  resetAfterRender() {
    const projectModal = document.getElementById("modal-container");
    document.getElementById("title-input").value = "";
    document.getElementById("description-input").value = "";
    projectModal.style.display = "none";
  }

  renderTitleDescription() {
    const container = document.getElementById("task-container");
    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("p");
    const createDescription = document.createElement("p");
    const buttonDiv = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");

    buttonDiv.class = "buttonDiv";

    editButton.innerText = "Edit";
    editButton.className = "editButton";
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    createDescription.innerText = `${this.description}`;
    createDescription.className = "titleElement";
    if (!createDescription.innerText) {
      createDescription.innerText = "No description";
    }

    createNewContainer.className = "newContainers";

    buttonDiv.className = "buttonDiv";

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(createDescription);
    createNewContainer.appendChild(buttonDiv);
    container.appendChild(createNewContainer);

    this.resetAfterRender();
  }

  setTitleAndDescription() {
    this.renderTitleDescription();
  }
}
