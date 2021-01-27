import Project from './project'
import showProjectToDom from './showProjectToDom'

const showProject = (projectId) => {
  const project = JSON.parse(localStorage.getItem(projectId))
  console.log(project)
   showProjectToDom(project, projectId)
}


export default showProject