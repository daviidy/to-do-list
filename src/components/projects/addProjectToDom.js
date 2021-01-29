import showProject from './showProject'

const addProjectToDom = (project, projectId) => {
  const projectsList = document.getElementById('projectsList')
  const item = document.createElement('li')
  const link = document.createElement('a')
  link.classList.add('text-dark')
  link.classList.add('pointer')
  link.classList.add('project')
  link.setAttribute('id', projectId)
  link.innerHTML = project

  item.append(link)
  projectsList.append(item)

  link.addEventListener('click', (event) => {
    event.preventDefault()
    showProject(projectId);
  })

}

export default addProjectToDom
