import Todo from './todo';
import addTaskToDom from './addTaskToDom';

const addTask = (title, description, dueDate, priority, projectId) => {
  const todo = new Todo(title, description, dueDate, priority);
  const project = JSON.parse(localStorage.getItem(projectId));

  project.todos.push(todo);
  localStorage[projectId] = JSON.stringify(project);


  addTaskToDom(JSON.parse(localStorage[projectId]).todos);
};

export default addTask;
