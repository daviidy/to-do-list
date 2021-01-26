import Project from './project'
import addProjectToDom from './addProjectToDom'

const addProject = (title) => {
  let project = new Project(title);
  const projectId = "project-"+Date.now()
  localStorage.setItem(projectId, JSON.stringify(project))
  addProjectToDom(project.titleProp, projectId)
}

export default addProject
