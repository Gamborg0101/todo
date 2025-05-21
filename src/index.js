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
const project2 = new Project("My small project", false);
const todo1 = new Todo("Buy eggs", "19.01.2026", "low", false);
const todo2 = new Todo("Clean room", "21.01.2026", "high", false);
const todo3 = new Todo("Bother Niels", "21.05.2025", "high", false);
project1.addTodo(todo1);
project1.addTodo(todo2);
project2.addTodo(todo3);

changeDOM();
handleProjectFormSubmit();
handleTodoForm();
toDoButtonModal();
