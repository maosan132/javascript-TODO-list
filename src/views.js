/* eslint-disable import/extensions */
import { addDomElem } from './helper.js';
import { myProjects } from './project-model.js';
import { box } from './forms.js';

const taskListDiv = addDomElem('div', 'class', 'mt-3');
const projectsListDiv = addDomElem('div', 'class', 'mt-3'); // Inside this the boxes with every project

// Render each project *third menu button*
const renderProjectItems = () => {
  const template = document.getElementById('template-project').content;
  const fragment = document.createDocumentFragment();

  projectsListDiv.innerHTML = '';
  myProjects.forEach(item => {
    const clone = template.cloneNode(true);
    clone.querySelector('p').textContent = item.name;
    fragment.appendChild(clone);
  });

  return projectsListDiv.appendChild(fragment);
};

// renders the projects container
const renderProjectsContainer = () => {
  const projectTitle = addDomElem('h4', 'class', 'py-2', 'Projects');
  const projectPara = addDomElem('p', 'class', 'text-center');
  projectPara.textContent = 'Select a project and start adding your Todo tasks:\n';


  box.innerHTML = '';
  box.append(projectTitle, projectPara, projectsListDiv);
};

// Renders every task item inside projectsListDiv
const renderTodoItems = (index) => {
  const template = document.getElementById('template-task').content;
  const fragment = document.createDocumentFragment();

  // If there are not tasks to display, puts a message
  if (!Object.values(myProjects[index].taskList).length) {
    taskListDiv.innerHTML = `
    <div class="alert alert-dark">There are not tasks yet. Let's create a new one.</div>
    `;
    return;
  }

  taskListDiv.innerHTML = '';

  Object.values(myProjects[index].taskList).forEach(task => {
    const clone = template.cloneNode(true);
    if (task.status) {
      clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary');
      clone.querySelector('.fa-check-circle ').classList.replace('fa-check-circle', 'fa-undo-alt');
      clone.querySelector('p').style.textDecoration = 'line-through';
    } else {
      clone.querySelector('.alert').classList.replace('alert-primary', 'alert-danger');
    }

    if (task.priority === 'High') {
      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-full');
    } else if (task.priority === 'Low') {
      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-empty');
    }

    clone.querySelector('p').textContent = task.name;
    clone.querySelectorAll('span')[1].textContent = task.description;
    clone.getElementById('date').textContent = task.date;
    clone.querySelector('.fas').id = task.id;
    clone.querySelectorAll('.fas')[1].id = task.id;
    clone.querySelectorAll('.fas')[2].id = task.id;

    fragment.appendChild(clone);
  });
  taskListDiv.appendChild(fragment);
};

// renders the div containing of each task to do
const renderTodoContainer = (pName) => {
  // bring project name here
  const title = addDomElem('h4', 'class', 'py-2', `Todo List - ${pName} project`);
  const taskIdentifier = addDomElem('a', 'id', `${pName}`, ''); // For grabbing task

  const project = myProjects.find(project => project.name === pName);
  const projectIndex = myProjects.indexOf(project);
  renderTodoItems(projectIndex);

  box.innerHTML = '';
  box.append(title, taskIdentifier, taskListDiv);
};

export {
  renderProjectsContainer, renderProjectItems, renderTodoContainer, renderTodoItems, taskListDiv,
};