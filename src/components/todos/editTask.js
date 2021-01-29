/* eslint-disable import/no-cycle */
import addTaskToDom from './addTaskToDom';

const editTask = (projectId, i) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  const task = project.todos[i];
  const taskTitle = document.getElementById('titleEdit');
  const taskDescription = document.getElementById('descriptionEdit');
  const taskDate = document.getElementById('dateEdit');
  const taskPriority = document.getElementById('priorityEdit');
  const taskButton = document.getElementById('taskButtonEdit');
  taskTitle.value = task.title;
  taskDescription.value = task.description;
  taskDate.value = task.dueDate;
  taskPriority.value = task.priority;

  taskButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskTitle.value !== '' && taskDescription.value !== '' && taskDate.value !== '' && taskPriority.value !== '') {
      task.title = taskTitle.value;
      task.description = taskDescription.value;
      task.dueDate = taskDate.value;
      task.priority = taskPriority.value;
      localStorage[projectId] = JSON.stringify(project);
      addTaskToDom(project.todos);
    }
  });
};

export default editTask;
