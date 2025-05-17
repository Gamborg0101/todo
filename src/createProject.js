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
    const projectContainer = document.getElementById("project-container");
    const todoContainer =
      document.getElementById(
        "todo-container"
      ); /* Skal bruges, når jeg er klar til at appende en ny task. */

    const createNewContainer = document.createElement("div");
    const createTitle = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteButton";

    /* Functionality for delete button */
    deleteButton.addEventListener("click", () => {
      createNewContainer.remove();
    });

    createTitle.addEventListener("click", () => {
      createNewContainer.setAttribute("data-select", "selected");
    });

    createTitle.innerText = `${this.title}`;
    createTitle.className = "titleElement";

    createNewContainer.classList.add("single-project");

    createNewContainer.appendChild(createTitle);
    createNewContainer.appendChild(deleteButton);

    projectContainer.appendChild(createNewContainer);

    this.resetInputFields();
  }

  setTitleAndDescription() {
    this.renderProjectElement();
  }
}

/*
Design forslag fra nu: 

    projectname: 1
    description: value,
    dueDate: value, 
    priority: value,
    notes: value, 
    todoItem1 = [
    checklist:value
    ]

  
  

*/
