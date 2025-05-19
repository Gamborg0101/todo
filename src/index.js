import "./style.css";
import { Project } from "./changeDOM";
import { Todo } from "./createTask";
import {
  changeDOM,
  handleProjectFormSubmit,
  toDoButtonModal,
  handleTodoForm,
} from "./createProject";

const project1 = new Project("My big project", false);
const todo1 = new Todo("Buy eggs", "19.01.2026", "low", false);
const todo2 = new Todo("Clean room", "21.01.2026", "high", false);

// console.log(project1.addTodo(todo1));
// console.log(project1.addTodo(todo2));
// console.log(project1);

changeDOM();
handleProjectFormSubmit();
handleTodoForm();
toDoButtonModal();
