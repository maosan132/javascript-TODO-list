import { addDomElem } from './helper';
import { myProjects } from './project-model';
import { box } from './forms';

const taskListDiv = addDomElem('div', 'class', 'mt-3');
const projectsListDiv = addDomElem('div', 'class', 'mt-3'); // Inside this the boxes with every project

// Render each project *third menu button*
const renderProjectItems = () => {
  const template = document.getElementById('template-project').content;
  const fragment = document.createDocumentFragment();
  const projectDiv = addDomElem('div', 'class', 'alert alert-danger d-flex align-items-center');
  projectDiv.classList.add('justify-content-between');
  projectDiv.setAttribute('role', 'button');
  const projectName = addDomElem('p', 'class', 'm-0');
  // const iconH3 = addDomElem('h3', 'class', 'm-0');
  // const trashIcon = addDomElem('i', 'class', 'fa fa-times-circle text-danger');
  // trashIcon.setAttribute('role', 'button');
  projectDiv.append(projectName);
  // iconH3.append(trashIcon);

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
  // const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex mb-2');
  // homeBtnTemp.classList.add('align-items-center');
  // homeBtnTemp.textContent = 'Projects';
  // const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));
  // homeBtn.setAttribute('type', 'button');

  box.innerHTML = '';
  box.append(projectTitle, projectPara, projectsListDiv);
};

// Renders every task item inside projectsListDiv
const renderTodoItems = (index) => {
  const template = document.getElementById('template-task').content;
  const fragment = document.createDocumentFragment();
  const taskDiv = addDomElem('div', 'class', 'alert alert-warning align-items-center');
  const firstRow = addDomElem('div', 'class', 'd-flex justify-content-between');
  const date = addDomElem('span', 'id', 'date');
  const taskName = addDomElem('p', 'class', 'm-0');
  const buttonsH3 = addDomElem('h3', 'class', 'm-0');
  const checkIcon = addDomElem('i', 'class', 'fas fa-check-circle text-success mr-2');
  const deleteIcon = addDomElem('i', 'class', 'fas fa-minus-circle text-danger');
  checkIcon.setAttribute('role', 'button');
  deleteIcon.setAttribute('role', 'button');
  const hrTag = addDomElem('hr', 'class', 'm-0');
  const secondRow = addDomElem('div', 'class', 'd-flex justify-content-between');
  const description = document.createElement('span');
  const iconH4 = document.createElement('h4');
  const priorityIcon = addDomElem('i', 'class', 'fa fa-battery-half');

  buttonsH3.append(checkIcon, deleteIcon);
  firstRow.append(date, taskName, buttonsH3);
  iconH4.appendChild(priorityIcon);
  secondRow.append(description, iconH4);
  taskDiv.append(firstRow, hrTag, secondRow);

  // If there are not tasks to display, puts a message
  if (!Object.values(myProjects[index].taskList).length) {
    taskListDiv.innerHTML = `
    <div class="alert alert-dark">There are not tasks yet. Let's create a new one.</div>
    `;
    return;
  }

  taskListDiv.innerHTML = '';

  Object.entries(myProjects[index].taskList).forEach(([i, task]) => {
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
    fragment.appendChild(clone);
  });
  taskListDiv.appendChild(fragment);
};

// renders the div containing of each task to do
const renderTodoContainer = (pName) => {
  // bring project name here
  const title = addDomElem('h4', 'class', 'py-2', `Todo List - ${pName} project`);
  const taskIdentifier = addDomElem('a', 'id', `${pName}`, ''); // For grabbing task
  // const paragraph = addDomElem('p', 'class', 'text-center', 'Start adding some tasks:\n');

  const project = myProjects.find(project => project.name === pName);
  const projectIndex = myProjects.indexOf(project);
  renderTodoItems(projectIndex);

  box.innerHTML = '';
  box.append(title, taskIdentifier, taskListDiv);
};

export {
  renderProjectsContainer, renderProjectItems, renderTodoContainer, renderTodoItems, taskListDiv,
};