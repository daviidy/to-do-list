import showProjectToDom from './showProjectToDom';

const showProject = (projectId) => {
<<<<<<< HEAD
  const project = JSON.parse(localStorage.getItem(projectId));
  showProjectToDom(project, projectId);
};
=======
  const project = JSON.parse(localStorage.getItem(projectId))
  console.log(project)
   showProjectToDom(project, projectId)
}
>>>>>>> parent of fa8df38... refactor addProjectToDom.js. removed all the console.log


export default showProject;
