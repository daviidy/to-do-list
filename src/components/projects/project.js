class Project {
  constructor(title){
    this._title = title
    this._todos = []
  }

  get titleProp(){
    return this._title
  }

  get todosProp(){
    return this._todos
  }

  set todosProp(updatedTodos){
    this._todos = updatedTodos
  }

}

export default Project
