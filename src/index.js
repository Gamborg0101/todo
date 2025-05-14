import "./style.css";
import { Project } from "./createProject";
import { changeDOM } from "./changeDOM";

const task1 = new Project({
  title: "Grocery",
  description: "Buy milk and eggs",
  dueDate: "2025-05-11",
  priority: "High",
  notes: "Use discount coupons",
  checklist: ["Milk", "Eggs"],
});

task1.removeCheckList("Eggs");

console.log(changeDOM());
