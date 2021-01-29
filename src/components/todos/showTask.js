
const showTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId))
  const task = project._todos[i]

  const modal = document.getElementById('taskDetails')
  const column = document.createElement('div')
  column.classList.add('col-6')
  const title = document.createElement('h3')
  title.innerHTML = task._title
  const description = document.createElement('p')
  description.innerHTML = task._description
  const dueDate = document.createElement('p')
  dueDate.innerHTML = 'Due Date: ' + task._dueDate

  modal.append(column)
  column.append(title)
  column.append(description)
  column.append(dueDate)

}

export default showTask
