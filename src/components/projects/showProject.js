const showProject = (projectId) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  return project
};

export default showProject;
