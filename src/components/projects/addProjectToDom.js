const addProjectToDom = (project, projectId) => {
  const projectsList = document.getElementById('projectsList')
  const item = document.createElement('li')
  const link = document.createElement('a')
  link.classList.add('text-dark')
  link.setAttribute('id', projectId)
  link.innerHTML = project
  item.append(link)
  projectsList.append(item)
}

export default addProjectToDom
