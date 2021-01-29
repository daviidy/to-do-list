import showTaskToDom from './showTaskToDom';

const showTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  const task = project.todos[i];
  showTaskToDom(task);
};

export default showTask;
