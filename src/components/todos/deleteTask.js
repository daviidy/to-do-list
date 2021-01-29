/* eslint-disable import/no-cycle */
import addTaskToDom from './addTaskToDom';

const deleteTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  project.todos.splice(i, 1);
  localStorage[projectId] = JSON.stringify(project);
  addTaskToDom(project.todos);
};

export default deleteTask;
