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
    todoItem1 = [{
    description: value,
    dueDate: value, 
    priority: value,
    notes: value, 
    checklist:value
      }

    todoItem2 = [{
    description: value,
    dueDate: value, 
    priority: value,
    notes: value, 
    checklist:value
      }
    ]
      projectname: 2
    todoItem1 = [{
    description: value,
    dueDate: value, 
    priority: value,
    notes: value, 
    checklist:value
      }

    todoItem2 = [{
    description: value,
    dueDate: value, 
    priority: value,
    notes: value, 
    checklist:value
      }
    ]
    


Så kan jeg tilgå dem via projekt navn, og derefter hænge to-do listen sammen med resten. 

Det jeg mangler at gøre, er at få "Create New Project"-knappen til at lave en instans, og derefter burde det faktisk være okay nemt.  

Men jeg mangler lidt et øvre lag. Så det nærmerer bliver: 

  

*/
