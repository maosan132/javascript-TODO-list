import { addDomElem, debugColor } from './helper';
import { myProjects } from './project-model';
import { box } from './forms';

// const projectBox = document.getElementById('box'); // get box for painting html inside
const taskListDiv = addDomElem('div', 'class', 'mt-3');
const projectsListDiv = addDomElem('div', 'class', 'mt-3'); // Inside this the boxes with every project

// Render each project *third menu button*
const renderProjectItems = () => {
  const template = document.getElementById('template-project').content;
  const fragment = document.createDocumentFragment();
  const projectDiv = addDomElem('div', 'class', 'alert alert-primary d-flex align-items-center');
  projectDiv.classList.add('justify-content-between');
  const projectName = addDomElem('p', 'class', 'm-0');
  const iconH3 = addDomElem('h3', 'class', 'm-0');
  const editIcon = addDomElem('i', 'class', 'fa fa-pencil-square text-success mr-2');
  const trashIcon = addDomElem('i', 'class', 'fa fa-times-circle text-danger');

  editIcon.setAttribute('role', 'button');
  trashIcon.setAttribute('role', 'button');
  projectDiv.append(projectName, iconH3);
  iconH3.append(editIcon, trashIcon);

  projectDiv.innerHTML = ''; // cleans container so it avoids repeating list of projects
  myProjects.forEach(item => {
    console.log('item name', item.name);
    const clone = template.cloneNode(true);
    // console.log('cloned item text', clone.querySelector('p').textContent);
    clone.querySelector('p').textContent = item.name;
    console.log('clone:', clone);
    fragment.appendChild(clone);
    console.log(fragment);
  });

  console.log('should render fragment now');
  return projectDiv.appendChild(fragment);
};

// project div delete project and edit buttons functions but in the controller

// renders the projects container
const renderProjectsContainer = () => {
  const projectTitle = addDomElem('h4', 'class', 'py-2', 'Projects');
  const projectPara = addDomElem('p', 'class', 'text-center');
  projectPara.textContent = 'Select a project and start adding your Todo tasks.\n';
  const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex mb-2');
  homeBtnTemp.classList.add('align-items-center');
  homeBtnTemp.textContent = 'Projects';
  const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));
  homeBtn.setAttribute('type', 'button');

  box.append(projectTitle, projectPara, projectsListDiv, homeBtn);

  projectsListDiv.appendChild(renderProjectItems());
};

// Renders every task item inside projectsListDiv
const renderTodoItems = (index) => {
  console.log('inside rendertodos');
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

  taskDiv.innerHTML = '';

  // loop the array of tasks

  // myProjects[index].taskList.forEach(task => {
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

    clone.querySelector('p').textContent = task.title;
    clone.querySelectorAll('span')[1].textContent = task.description;
    clone.getElementById('date').textContent = task.date;

    clone.querySelector('.fas').id = task.id;
    clone.querySelectorAll('.fas')[1].id = task.id;
    fragment.appendChild(clone);
  });
  taskListDiv.appendChild(fragment);
  debugColor('g');

};

// renders the div containing of each task to do
const renderTodoContainer = (pName) => {
  // bring project name here
  const title = addDomElem('h4', 'class', 'py-2', `Todo List - ${pName} project`);
  const taskIdentifier = addDomElem('a', 'id', `${pName}`, '');
  const paragraph = addDomElem('p', 'class', 'text-center', 'Start adding some tasks:\n');

  box.innerHTML = '';
  box.append(title, taskIdentifier, paragraph, taskListDiv);
};

export {
  renderProjectsContainer, renderProjectItems, renderTodoContainer, renderTodoItems, taskListDiv,
};
