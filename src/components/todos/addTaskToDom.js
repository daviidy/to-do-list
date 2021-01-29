import editTask from './editTask'
import showTask from './showTask'

const addTaskToDom =(project)=>{

  const tasks= document.getElementById("tasks")

   while(tasks.firstChild){
       tasks.removeChild(tasks.lastChild)

   }

  for(let i=0; i<project.length; i++){

  const taskCard= document.getElementById("tasks")
  const ulElement= document.createElement("ul");

  const liElement = document.createElement("li");
  liElement.classList.add("border-bottom", "p-3", "pointer", "d-flex")

  const taskDiv= document.createElement("div");
  taskDiv.classList.add("ml-auto");

  const linkEdit = document.createElement("a");
  linkEdit.classList.add('pointer')
  linkEdit.setAttribute("data-toggle","modal")
  linkEdit.setAttribute("data-target","#editTask")

  const iTagEdit= document.createElement("i");
  iTagEdit.classList.add("fas", "fa-pencil-alt")

  const linkShow = document.createElement("a");
  linkShow.classList.add('pointer')
  linkShow.setAttribute("data-toggle","modal")
  linkShow.setAttribute("data-target","#showTask")

  const iTagView= document.createElement("i");
  iTagView.classList.add("far", "fa-eye");

  // appending elements
  taskDiv.append(linkEdit);
  linkEdit.append(iTagEdit);
  taskDiv.append(linkShow)
  linkShow.append(iTagView);

  liElement.append(project[i]._title);
  liElement.append(taskDiv);

  ulElement.append(liElement);

  taskCard.append(ulElement);

  }

  const newTaskLink = document.getElementById('newTaskLink')
  const projectId = newTaskLink.getAttribute('data-attribute')
  const editTaskLinks = document.getElementsByClassName('fa-pencil-alt')
  for (let i = 0; i < editTaskLinks.length; i++) {
    editTaskLinks[i].parentElement.addEventListener('click', (event) => {
      editTask(projectId, i)
    })
  }

  const viewTaskLinks = document.getElementsByClassName('fa-eye')
  for (let i = 0; i < viewTaskLinks.length; i++) {
    viewTaskLinks[i].parentElement.addEventListener('click', (event) => {
      showTask(projectId, i)
    })
  }

}
export default addTaskToDom
