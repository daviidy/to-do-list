import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject'
import addProjectToDom from './components/projects/addProjectToDom'
import index from './components/projects/index'

//display all the projects
const projects = index()
Object.entries(projects).map(([key,value]) => {
  addProjectToDom(JSON.parse(value)._title, key)
})


const buttonProject = document.getElementById('newProjectButton')
const titleProject = document.getElementById('titleProject')

buttonProject.addEventListener("click", (event) => {
  event.preventDefault()
  if (titleProject.value !== '') {
    addProject(titleProject.value)
    console.log(`project added: ${titleProject.value}`)
  }
})
