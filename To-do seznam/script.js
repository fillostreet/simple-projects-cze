const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Načtení uložených úkolů při načtení stránky
window.addEventListener('DOMContentLoaded', loadTasks);

// Přidání úkolu po kliknutí na tlačítko "Přidat"
addButton.addEventListener('click', addTask);

// Přidání úkolu při stisku Enter ve vstupu
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Odstranění úkolu po kliknutí na něj
taskList.addEventListener('click', removeTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);

    saveTask(taskText);

    taskInput.value = '';
  }
}

function removeTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();

    removeTaskFromStorage(event.target.textContent);
  }
}

function saveTask(taskText) {
  let tasks = getTasksFromStorage();
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromStorage(taskText) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromStorage() {
  let tasks;
  const tasksJSON = localStorage.getItem('tasks');
  if (tasksJSON === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasksJSON);
  }
  return tasks;
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
  });
}
