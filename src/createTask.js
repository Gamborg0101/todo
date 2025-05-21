export class Todo {
  constructor(title, dueDate, priority, completed) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  getTodoTitle() {
    return this.title;
  }
}

// removeCheckList(item) {
//   return (this.checklist = this.checklist.filter((index) => index !== item));
// }
