class Project {
  constructor(title) {
    this.title = title;
    this.createdAt = Date.now();
    this.todos = [];
  }

  get titleProp() {
    return this.title;
  }

  get todosProp() {
    return this.todos;
  }

  set todosProp(updatedTodos) {
    this.todos = updatedTodos;
  }
}

export default Project;
