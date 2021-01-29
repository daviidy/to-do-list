import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject';
import addProjectToDom from './components/projects/addProjectToDom';
import index from './components/projects/index';
import addTask from './components/todos/addTask';

const projects = index();
// eslint-disable-next-line array-callback-return
Object.entries(projects).map(([key, value]) => {
  addProjectToDom(JSON.parse(value).title, key);
});


const buttonProject = document.getElementById('newProjectButton');
const titleProject = document.getElementById('titleProject');

buttonProject.addEventListener('click', (event) => {
  event.preventDefault();
  if (titleProject.value !== '') {
    addProject(titleProject.value);
  }
});

const taskTitle = document.getElementById('title');
const taskDescription = document.getElementById('description');
const taskDate = document.getElementById('date');
const taskPriority = document.getElementById('priority');
const taskButton = document.getElementById('taskButton');

// add a new task
taskButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (taskTitle.value !== '' && taskDescription.value !== '' && taskDate.value !== '' && taskPriority.value !== '') {
    const newTaskLink = document.getElementById('newTaskLink');
    const id = newTaskLink.getAttribute('data-attribute');
    addTask(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value, id);
  }
});
