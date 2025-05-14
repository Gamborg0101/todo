export class Task {
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

  addItemToCheckList(item) {
    return this.checklist.push(item);
  }

  removeCheckList(item) {
    return (this.checklist = this.checklist.filter((index) => index !== item));
  }
}
