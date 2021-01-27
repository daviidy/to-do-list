import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject'
import addProjectToDom from './components/projects/addProjectToDom'
import index from './components/projects/index'
import showProject from "./components/projects/showProject"
import addTask from './components/todos/addTask';

//display all the projects
const projects = index()
Object.entries(projects).map(([key,value]) => {
  addProjectToDom(JSON.parse(value)._title, key)
})


const buttonProject = document.getElementById('newProjectButton')
const titleProject = document.getElementById('titleProject')
const allProjects = document.getElementsByClassName('project')

buttonProject.addEventListener('click', (event) => {
  event.preventDefault()
  if (titleProject.value !== '') {
    addProject(titleProject.value)
    console.log(`project added: ${titleProject.value}`)
  }
})

for (let i = 0; i < allProjects.length; i++) {
  // console.log(allProjects[i])
  allProjects[i].addEventListener('click', (event) => {
    event.preventDefault()
    let id = allProjects[i].getAttribute('id')
    showProject(id);

    console.log(id)
  })

const taskTitle= document.getElementById("title");
const taskDescription= document.getElementById("description");
const taskDate= document.getElementById("date");
const taskPriority= document.getElementById("priority");
const taskButton= document.getElementById("taskButton");
// const taskLink= document.getElementById("projectID");


taskButton.addEventListener("click", (event)=>{
  event.preventDefault()
  if(taskTitle.value!=="" && taskDescription.value!=="" && taskDate.value!==""&& taskPriority.value!==""){
    // console.log("the id value"+ taskIDValue)
    // let c= document.getElementsByClassName("card")
    // console.log("the id value"+ c.id)
    addTask(taskTitle.value,taskDescription.value,taskDate.value,taskPriority.value)
  }
})




}
