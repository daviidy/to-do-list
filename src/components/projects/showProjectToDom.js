const showProjectToDom = (project) => {
    const projectHoler= document.getElementById("projects-holder")
    const projectsList = document.getElementById('project-details')
    while(projectsList.firstChild){
        projectsList.removeChild(projectsList.lastChild)

    }
   
    const item = document.createElement('h2')
    item.classList.add("font-weight-bold")


    const link = document.createElement('a')
    link.classList.add('text-dark')
    link.classList.add('pointer')
    link.setAttribute("data-toggle","modal")
    link.setAttribute("data-target","#newTask")
 
    const iTag= document.createElement('i');
    iTag.classList.add("fas","fa-plus")

    item.innerHTML=project._title
    link.innerHTML = "Add a new task"
    link.append(iTag)
    projectsList.prepend(link)
    projectsList.prepend(item)
    
  }
  
  export default showProjectToDom
  