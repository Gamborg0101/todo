export class Project {
  constructor(title, active) {
    this.title = title;
    this.active = active;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

export class Todo {
  constructor(title, dueDate, priority, completed) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}


// removeCheckList(item) {
//   return (this.checklist = this.checklist.filter((index) => index !== item));
// }