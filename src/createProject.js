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
    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("p");
    const deleteButton = document.createElement("button");
    const projectContainer = document.getElementById("project-container");

    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    /* Functionality for delete button */
    deleteButton.addEventListener("click", () => {
      createNewContainer.remove();
    });

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    createNewContainer.classList = "single-projects";

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(deleteButton);

    projectContainer.appendChild(createNewContainer);

    this.resetInputFields();
  }

  setTitleAndDescription() {
    this.renderProjectElement();
  }
}
