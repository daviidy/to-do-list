import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject'
import addProjectToDom from './components/projects/addProjectToDom'
import index from './components/projects/index'
import showProject from "./components/projects/showProject"
import addTask from './components/todos/addTask'

//display all projects when loading the nthe page
const projects = index()
Object.entries(projects).map(([key,value]) => {
  addProjectToDom(JSON.parse(value)._title, key)
})


const buttonProject = document.getElementById('newProjectButton')
const titleProject = document.getElementById('titleProject')

// add a new project
buttonProject.addEventListener('click', (event) => {
  event.preventDefault()
  if (titleProject.value !== '') {
    addProject(titleProject.value)
  }
})

const taskTitle= document.getElementById("title");
const taskDescription= document.getElementById("description");
const taskDate= document.getElementById("date");
const taskPriority= document.getElementById("priority");
const taskButton= document.getElementById("taskButton");

// add a new task
taskButton.addEventListener("click", (event)=>{
  event.preventDefault()
  if(taskTitle.value!=="" && taskDescription.value!=="" && taskDate.value!==""&& taskPriority.value!==""){
    const newTaskLink = document.getElementById('newTaskLink')
    const id = newTaskLink.getAttribute('data-attribute')
    addTask(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value, id)
  }
})
