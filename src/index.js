import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject';
import addProjectToDom from './components/projects/addProjectToDom';
import index from './components/projects/index';
import addTask from './components/todos/addTask';

<<<<<<< HEAD
const projects = index();
// eslint-disable-next-line array-callback-return
Object.entries(projects).map(([key, value]) => {
  addProjectToDom(JSON.parse(value).title, key);
});


const buttonProject = document.getElementById('newProjectButton');
const titleProject = document.getElementById('titleProject');
=======
const projects = index()
Object.entries(projects).map(([key,value]) => {
  addProjectToDom(JSON.parse(value)._title, key)
})


const buttonProject = document.getElementById('newProjectButton')
const titleProject = document.getElementById('titleProject')
const allProjects = document.getElementsByClassName('project')
>>>>>>> parent of fa8df38... refactor addProjectToDom.js. removed all the console.log

buttonProject.addEventListener('click', (event) => {
  event.preventDefault();
  if (titleProject.value !== '') {
    addProject(titleProject.value);
  }
});

<<<<<<< HEAD
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
=======
for (let i = 0; i < allProjects.length; i++) {
  allProjects[i].addEventListener('click', (event) => {
    event.preventDefault()
    let id = allProjects[i].getAttribute('id')
    showProject(id);
  })
}

const taskTitle= document.getElementById("title");
const taskDescription= document.getElementById("description");
const taskDate= document.getElementById("date");
const taskPriority= document.getElementById("priority");
const taskButton= document.getElementById("taskButton");


taskButton.addEventListener("click", (event)=>{
  event.preventDefault()
  if(taskTitle.value!=="" && taskDescription.value!=="" && taskDate.value!==""&& taskPriority.value!==""){
    const newTaskLink = document.getElementById('newTaskLink')
    const id = newTaskLink.getAttribute('data-attribute')
    addTask(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value, id)
>>>>>>> parent of fa8df38... refactor addProjectToDom.js. removed all the console.log
  }
});
