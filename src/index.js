import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addProject from './components/projects/addProject'
import addProjectToDom from './components/projects/addProjectToDom'
import index from './components/projects/index'

//display all the projects
const projects = index()
console.log(projects)
Object.entries(projects).map(([key,value]) => {
  console.log(JSON.parse(value))
  addProjectToDom(JSON.parse(value)._title, key)
})
// for (var i = 0; i < projects.length; i++) {
//   console.log( JSON.parse(projects[i])._title )
//   addProjectToDom(JSON.parse(projects[i])._title, projectId)
// }

const buttonProject = document.getElementById('newProjectButton')
const titleProject = document.getElementById('titleProject')

buttonProject.addEventListener("click", (event) => {
  event.preventDefault()
  if (titleProject.value !== '') {
    addProject(titleProject.value)
    console.log(`project added: ${titleProject.value}`)
  }
})
