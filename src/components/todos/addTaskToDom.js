import editTask from './editTask'

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
  linkEdit.setAttribute('id', i)

  const iTagEdit= document.createElement("i");
  iTagEdit.classList.add("fas", "fa-pencil-alt")

  const iTagView= document.createElement("i");
  iTagView.classList.add("far", "fa-eye");

  // appending elements
  taskDiv.append(linkEdit);
  linkEdit.append(iTagEdit);
  taskDiv.append(iTagView);

  liElement.append(project[i]._title);
  liElement.append(taskDiv);

  ulElement.append(liElement);

  taskCard.append(ulElement);

  }

  const editTaskModal = document.getElementById('editTask')
  const newTaskLink = document.getElementById('newTaskLink')
  const projectId = newTaskLink.getAttribute('data-attribute')
  const editTaskLinks = document.getElementsByClassName('fa-pencil-alt')
  for (let i = 0; i < editTaskLinks.length; i++) {
    editTaskLinks[i].parentElement.addEventListener('click', (event) => {
      let taskId = editTaskLinks[i].parentElement.getAttribute('id')
      editTask(projectId, i)
    })
  }

}
export default addTaskToDom
