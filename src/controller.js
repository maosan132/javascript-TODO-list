/* eslint-disable import/extensions */
import { Project, myProjects } from './project-model.js';
import Task from './task-model.js';
import { newProjectForm, newTodoForm, box } from './forms.js';
import {
  renderProjectsContainer, renderTodoItems, renderTodoContainer, taskListDiv, renderProjectItems,
} from './views.js';

const validateProjectName = (nameInput) => {
  const checkValue = myProjects.includes(nameInput.value);
  if (checkValue) {
    nameInput.style.color = 'red';
    nameInput.value = `${nameInput.value} exists, choose another project name `;
    return true;
  }
  return false;
};

// Finds specific project to work with when inserting todo lists
const findProject = title => myProjects.find(p => p.name === title);

const addTaskToProject = (t, index) => {
  myProjects[index].taskList[t.id] = t; // With task.id as property of task object
};

// captures form, input, textarea, deadline, priority and creates task element
const editTasks = (f, i, t, d, p, pName, id) => {
  const indexOfWorkingProject = myProjects.indexOf(findProject(pName));
  let selectedValue;

  p.forEach(item => {
    if (item.checked) {
      selectedValue = item.value;
    }
  });

  if (!id) {
    const task = new Task(
      i.value,
      t.value,
      d.value,
      selectedValue,
      false,
    );
    addTaskToProject(task, indexOfWorkingProject);
  } else {
    const project = myProjects.find(project => project.name === pName);
    const projectIndex = myProjects.indexOf(project);
    const taskItem = myProjects[projectIndex].taskList[id];
    taskItem.name = i.value;
    taskItem.description = t.value;
    taskItem.date = d.value;
    taskItem.priority = selectedValue;
  }

  // finds out what Project has this project name

  f.reset();
  i.focus();

  // Sends task to renderer
  renderTodoItems(indexOfWorkingProject);
};

// Captures task form values and push it as obj into prop taskList of specific myProjects item
const captureNewTask = (projectName) => {
  newTodoForm();

  const h5 = document.querySelector('h5');
  const form = document.getElementById('todo-form');
  const input = document.getElementById('input');
  const textarea = document.querySelector('textarea');
  const deadline = document.querySelector('input[type=date]');
  const priority = document.querySelectorAll('input[type=radio]');
  const doneBtn = document.getElementById('done-btn');

  // captures data from form then push them into task object inside project

  form.addEventListener('submit', e => {
    e.preventDefault();
    editTasks(form, input, textarea, deadline, priority, projectName);
  });

  const clearTaskForm = () => {
    form.style.display = 'none';
    h5.classList.add('d-none');
  };

  doneBtn.addEventListener('click', e => {
    e.preventDefault();
    clearTaskForm();
  });
};

const addProject = p => {
  const project = new Project(p); // Creates project with name specified in form
  myProjects.push(project);

  renderTodoContainer(p);
  captureNewTask(p);
};

// *****First menu option*****
const createNewProject = () => {
  newProjectForm(); // puts the form inside box
  const saveButton = document.querySelector('button');

  saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input.form-control');

    if (!validateProjectName(nameInput)) {
      const projectName = nameInput.value;
      addProject(projectName);
    }
  });
};

// *****Second menu option*****
const editProjects = (pName) => {
  renderTodoContainer(pName);
  captureNewTask(pName);
};

// *****Third menu option*****
const showProjectItems = () => {
  renderProjectsContainer();
  renderProjectItems();
  const projects = document.querySelectorAll('.alert');
  projects.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      editProjects(e.target.textContent);
    });
  });
};

const updateTask = (tName, pName, i, id) => {
  box.innerHTML = '';
  newTodoForm('edit');
  document.querySelectorAll('h5')[0].innerText = `Edit task '${tName}' of ${pName}'s  project.`;
  const form = document.getElementById('todo-form');
  const input = document.getElementById('input');
  const textarea = document.querySelector('textarea');
  const deadline = document.querySelector('input[type=date]');
  const priority = document.querySelectorAll('input[type=radio]');

  input.value = myProjects[i].taskList[id].name;
  input.style.color = 'red';
  textarea.value = myProjects[i].taskList[id].description;
  deadline.value = myProjects[i].taskList[id].date;

  form.addEventListener('submit', e => {
    e.preventDefault();
    editTasks(form, input, textarea, deadline, priority, pName, id);
  });
};

// buttons delete and status of each task item
const taskActions = (e) => {
  const currentTaskPrj = document.getElementsByTagName('a')[0].id; // Gets name of current prj
  const prjIndex = myProjects.indexOf(findProject(currentTaskPrj));
  const taskItem = myProjects[prjIndex].taskList[e.target.id];

  if (e.target.classList.contains('fa-check-circle')) {
    taskItem.status = true;
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-minus-circle')) {
    delete myProjects[prjIndex].taskList[e.target.id];
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-undo-alt')) {
    taskItem.status = false;
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-edit')) {
    updateTask(taskItem.name, currentTaskPrj, prjIndex, e.target.id);
  }
  e.stopPropagation();
};

taskListDiv.addEventListener('click', (e) => {
  taskActions(e);
});

export {
  createNewProject, editProjects, showProjectItems,
};