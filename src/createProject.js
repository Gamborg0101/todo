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
    const deleteButton = document.createElement("button");

    const taskList = document.getElementById("task-list");

    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    /* Functionality for delete button */
    deleteButton.addEventListener("click", () => {
      createNewContainer.remove();
    });

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    /*  
    Jeg appender det forkerte sted, så jeg skal bare lave en container div, 
    hvor min create new project ikke er en del af den, og så skal jeg appende ind i containeren.
    
    */

    taskList.appendChild(createTitle);
    taskList.appendChild(deleteButton);

    this.resetInputFields();
  }

  setTitleAndDescription() {
    this.renderProjectElement();
  }
}
