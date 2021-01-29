import Todo from './todo';
import addTaskToDom from './addTaskToDom';

const addTask = (title, description, dueDate, priority, projectId) => {
  const todo = new Todo(title, description, dueDate, priority);
  const project = JSON.parse(localStorage.getItem(projectId));

<<<<<<< HEAD
  project.todos.push(todo);
  localStorage[projectId] = JSON.stringify(project);


  addTaskToDom(JSON.parse(localStorage[projectId]).todos);
};

export default addTask;
=======
 
   addTaskToDom(JSON.parse(localStorage[projectId])._todos)
  // console.log(JSON.parse(localStorage[projectId]))

  
}

export default addTask
>>>>>>> parent of fa8df38... refactor addProjectToDom.js. removed all the console.log
