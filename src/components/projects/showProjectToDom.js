import addTaskToDom from '../todos/addTaskToDom';

const showProjectToDom = (project, id) => {
  const projectsList = document.getElementById('project-details');
  const tasks = document.getElementById('tasks');
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }
  while (tasks.firstChild) {
    tasks.removeChild(tasks.lastChild);
  }

  const item = document.createElement('h2');
  item.classList.add('font-weight-bold');

  const link = document.createElement('a');
  link.classList.add('text-dark');
  link.classList.add('pointer');
  link.setAttribute('data-toggle', 'modal');
  link.setAttribute('data-target', '#newTask');
  link.setAttribute('id', 'newTaskLink');
  link.setAttribute('data-attribute', id);
  const iTag = document.createElement('i');
  iTag.classList.add('fas', 'fa-plus');

  item.innerHTML = project.title;
  link.innerHTML = 'Add a new task';
  link.append(iTag);
  projectsList.prepend(link);
  projectsList.prepend(item);

  addTaskToDom(project.todos);
};


export default showProjectToDom;
