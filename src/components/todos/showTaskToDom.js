const showTaskToDom = (task) => {
  const column = document.getElementById('taskDetails');
  while (column.firstChild) {
    column.removeChild(column.lastChild);
  }
  const title = document.createElement('h3');
  title.innerHTML = task.title;
  const description = document.createElement('p');
  description.innerHTML = task.description;
  const dueDate = document.createElement('p');
  dueDate.innerHTML = `Due Date: ${task.dueDate}`;

  column.append(title);
  column.append(description);
  column.append(dueDate);
};

export default showTaskToDom;
