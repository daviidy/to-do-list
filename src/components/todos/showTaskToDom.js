/* eslint-disable no-underscore-dangle */
const showTaskToDom = (task) => {
  const column = document.getElementById('taskDetails');
  while (column.firstChild) {
    column.removeChild(column.lastChild);
  }
  const title = document.createElement('h3');
  title.innerHTML = task._title;
  const description = document.createElement('p');
  description.innerHTML = task._description;
  const dueDate = document.createElement('p');
  dueDate.innerHTML = `Due Date: ${task._dueDate}`;

  column.append(title);
  column.append(description);
  column.append(dueDate);
};

export default showTaskToDom;
