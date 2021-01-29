import showProjectToDom from './showProjectToDom';

const showProject = (projectId) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  showProjectToDom(project, projectId);
};

export default showProject;
