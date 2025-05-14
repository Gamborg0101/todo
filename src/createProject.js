export class CreateProject {
  constructor(title, description) {
    this.title = "";
    this.description = "";
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

  renderTitleDescription() {
    const container = document.getElementById("task-container");

    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("p");
    const createDescription = document.createElement("p");

    createTitle.innerText = `Title: ${this.title}`;
    createDescription.innerText = `Description: ${this.description}`;

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(createDescription);

    container.appendChild(createNewContainer);
  }

  setTitleAndDescription() {
    this.renderTitleDescription();
  }
}
