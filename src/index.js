import Task from './components/task.js';
import './style.css';

const taskDisplayArray = [
  {
    description: 'Solve 2 leetcode questions',
    completed: true,
    index: 0,
  },
  {
    description: 'deploy code to production',
    completed: false,
    index: 1,
  },
  {
    description: 'fix Cloudintern code bug',
    completed: false,
    index: 2,
  },
  {
    description: 'Automate CI/CI on jogar project',
    completed: true,
    index: 3,
  }
];

// Componenet to create and display the tasks
function component() {
  const containerElement = document.createElement('div');
  const btnClearTasks = document.createElement('button');
  const inputElement = document.createElement('input');
  const ulElement = document.createElement('ul');
  containerElement.classList.add('container-todo');
  inputElement.placeholder = 'Add to your list...';
  btnClearTasks.textContent = 'Clear all completed';
  btnClearTasks.classList.add('clear-btn');
  btnClearTasks.disabled = true;

  // Displays the task on the list dynamically.
  taskDisplayArray.map((task) => {
    ulElement.appendChild(Task(task));
    return 'done';
  });

  // Div class created is appended with ul and button elecments
  // which will display on the root div on the index,html page
  containerElement.append(inputElement, ulElement, btnClearTasks);
  return containerElement;
}

// query to the root class which will display the task.
const root = document.querySelector('.root');

// The root class selected above gets appended with the components
root.appendChild(component());