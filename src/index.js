import "./style.css";
import { Task } from "./createTask";
import { changeDOM, handleProjectFormSubmit } from "./changeDOM";


const task1 = new Task({
  title: "Grocery",
  description: "Buy milk and eggs",
  dueDate: "2025-05-11",
  priority: "High",
  notes: "Use discount coupons",
  checklist: ["Milk", "Eggs"],
});

task1.removeCheckList("Eggs");

changeDOM();
handleProjectFormSubmit();
