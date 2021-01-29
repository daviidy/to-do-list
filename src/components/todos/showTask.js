/* eslint-disable no-underscore-dangle */
import showTaskToDom from './showTaskToDom';

const showTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  const task = project._todos[i];
  showTaskToDom(task);
};

export default showTask;
