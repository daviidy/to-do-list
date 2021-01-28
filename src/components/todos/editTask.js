import addTaskToDom from './addTaskToDom'

const editTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId))
  const task = project._todos[i]
  const taskTitle= document.getElementById("titleEdit");
  const taskDescription= document.getElementById("descriptionEdit");
  const taskDate= document.getElementById("dateEdit");
  const taskPriority= document.getElementById("priorityEdit");
  const taskButton= document.getElementById("taskButtonEdit");
  taskTitle.value = task._title
  taskDescription.value = task._description
  taskDate.value = task._dueDate
  taskPriority.value = task._priority

  taskButton.addEventListener("click", (event)=>{
    event.preventDefault()
    if(taskTitle.value!=="" && taskDescription.value!=="" && taskDate.value!==""&& taskPriority.value!==""){
      task._title = taskTitle.value
      task._description = taskDescription.value
      task._dueDate = taskDate.value
      task._priority = taskPriority.value
      localStorage[projectId] = JSON.stringify(project)
      addTaskToDom(project._todos)
    }
  })
}

export default editTask
