const button = document.getElementById('criar-tarefa');

function removeTask({target}) {
  target.parentElement.remove();
};

function createTaskTemplate(text) {
  const taskSection = document.createElement('section');
  taskSection.classList.add('task-section');
  taskSection.innerHTML =   
  `<input type="checkbox" class="checkbox-task"/>
  <p class="task">${text}</p>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'X';
  removeButton.className = 'remove-task';
  removeButton.addEventListener('click', removeTask);
  taskSection.appendChild(removeButton);
  return taskSection;
};

function addToDoItem() {
  const inputTask = document.getElementById('texto-tarefa');
  const container = document.getElementById('container');
  const taskTemplate = createTaskTemplate(inputTask.value);
  container.appendChild(taskTemplate);
  inputTask.value = '';
};

button.addEventListener('click', addToDoItem);

const cleanAllButton = document.getElementById('apaga-tudo');

function cleanAllTasks() {
  const tasks = document.querySelectorAll('.task-section');
  tasks.forEach((section) => section.remove());
}

cleanAllButton.addEventListener('click', cleanAllTasks);

const cleanDoneButton = document.getElementById('remover-finalizados');

function cleanDone() {
  const tasksCheckbox = document.querySelectorAll('.checkbox-task');
  tasksCheckbox.forEach((checkbox) => checkbox.checked && checkbox.parentElement.remove());
};

cleanDoneButton.addEventListener('click', cleanDone);