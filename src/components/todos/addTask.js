import Todo from './todo'
import addTaskToDom from './addTaskToDom'
import index from "../projects/index";

const addTask = (title, description, dueDate, priority, projectId) => {
  let todo = new Todo(title, description, dueDate, priority)
  const project = JSON.parse(localStorage.getItem(projectId))
  const taskId = "task-"+Date.now()
  project._todos.push(todo)
  localStorage[projectId] = JSON.stringify(project)


  addTaskToDom(JSON.parse(localStorage[projectId])._todos)


}

export default addTask
