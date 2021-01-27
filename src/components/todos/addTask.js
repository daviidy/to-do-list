import Todo from './todo'
import addTaskToDom from './addTaskToDom'

const addTask = (title, description, dueDate, priority, projectId) => {
  let todo = new Todo(title, description, dueDate, priority)
  const project = JSON.parse(localStorage.getItem(projectId))
  const taskId = "task-"+Date.now()
  project._todos.push(todo)
  localStorage[projectId] = JSON.stringify(project)
  //addProjectToDom(project.titleProp, projectId)
}

export default addTask
