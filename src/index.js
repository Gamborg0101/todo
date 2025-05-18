import "./style.css";
import { Project } from "./changeDOM";
import { Todo } from "./createTask";
import {
  changeDOM,
  handleProjectFormSubmit,
  toDoButtonModal,
} from "./createProject";

const project1 = new Project("My big project", false);
const todo1 = new Todo("Buy eggs", "19.01.2026", "low", false);
const todo2 = new Todo("Clean room", "21.01.2026", "high", false);

// project1.addTodo(todo1);
// project1.addTodo(todo2);

// console.log(project1);

changeDOM();
handleProjectFormSubmit();

toDoButtonModal();

/*
To do: 

make a modal, that shows up when addItem is presed. 

Get information 
Instantiate and append to project - inside of changeDOM. 

Refactor in createProject so all elementcreation in done through a function, like: 

function createElement(ele, {
innertext, 
class,
attribute,  

}){
} 

createElement("p", {
"hello", 
"class1",
"data-set"
})


After form is done, give inputs to 
handleTodoForm()

and initialize todo instance. 


*/
