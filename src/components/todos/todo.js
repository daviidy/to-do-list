class Todo {
  constructor(title, description, dueDate, priority) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  get titleProp() {
    return this._title;
  }

  set titleProp(updatedTitle) {
    this._title = updatedTitle;
  }

  get descriptionProp() {
    return this._description;
  }

  set descriptionProp(updatedDescription) {
    this._description = updatedDescription;
  }

  get dueDateProp() {
    return this._dueDate;
  }

  set dueDateProp(updatedDate) {
    this._dueDate = updatedDate;
  }

  get priorityProp() {
    return this._priority;
  }

  set priorityProp(updatedPriority) {
    this._priority = updatedPriority;
  }
}

export default Todo;
