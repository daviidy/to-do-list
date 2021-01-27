import Todo from './todo'
import addTaskToDom from './addTaskToDom'

const addTask = (title, description, dueDate, priority) => {
  let todo = new Todo(title, description, dueDate, priority);
  const TaskId = "project-"+Date.now()
  localStorage.setItem(projectId, JSON.stringify(project))
  addTaskToDom(project.titleProp, projectId)
}

export default addTask
