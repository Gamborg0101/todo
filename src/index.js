import "./style.css";

class Task {
  constructor({ title, description, dueDate, priority, notes, checklist }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  getNotes() {
    return this.notes;
  }

  getCheckList() {
    return this.checklist;
  }
}

const task1 = new Task({
  title: "Grocery",
  description: "Buy milk and eggs",
  dueDate: "2025-05-11",
  priority: "High",
  notes: "Use discount coupons",
  checklist: ["Milk", "Eggs"],
});

console.log(task1.getCheckList());

/*
Look at material from TOP, and make a to-do list of functionality.



Delete items

Add new tasks 




*/
