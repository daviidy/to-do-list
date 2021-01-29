/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import addTaskToDom from './addTaskToDom';

const deleteTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  project._todos.splice(i, 1);
  localStorage[projectId] = JSON.stringify(project);
  addTaskToDom(project._todos);
};

export default deleteTask;
