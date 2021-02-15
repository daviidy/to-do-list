import Project from './project';

const addProject = (title) => {
  const project = new Project(title);
  const projectId = `project-${Date.now()}`;
  localStorage.setItem(projectId, JSON.stringify(project));
  return projectId
};

export default addProject;
