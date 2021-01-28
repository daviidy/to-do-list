const addTaskToDom =(project)=>{

  for(let i=0; i<project.length; i++){
    console.log(project[i]._title)
    
  const taskCard= document.getElementById("tasks")
  const ulElement= document.createElement("ul");

  const liElement = document.createElement("li");
  liElement.classList.add("border-bottom", "p-3", "pointer", "d-flex")

  const taskDiv= document.createElement("div");
  taskDiv.classList.add("ml-auto");

  const iTagEdit= document.createElement("i");
  iTagEdit.classList.add("fas", "fas-pencil-alt")

  const iTagView= document.createElement("i");
  iTagView.classList.add("far", "fa-eye");

  // appending elements
  taskDiv.append(iTagEdit);
  taskDiv.append(iTagView);

  liElement.append(project[i]._title);
  liElement.append(taskDiv);

  ulElement.append(liElement);

  taskCard.append(ulElement);

  }


}
export default addTaskToDom