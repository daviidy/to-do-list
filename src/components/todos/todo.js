class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get titleProp() {
    return this.title;
  }

  set titleProp(updatedTitle) {
    this.title = updatedTitle;
  }

  get descriptionProp() {
    return this.description;
  }

  set descriptionProp(updatedDescription) {
    this.description = updatedDescription;
  }

  get dueDateProp() {
    return this.dueDate;
  }

  set dueDateProp(updatedDate) {
    this.dueDate = updatedDate;
  }

  get priorityProp() {
    return this.priority;
  }

  set priorityProp(updatedPriority) {
    this.priority = updatedPriority;
  }
}

export default Todo;
