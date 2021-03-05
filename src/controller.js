import { Project, myProjects } from './project-model';
import Task from './task-model';
// import { cleanBox } from './helper';
import { newProjectForm, newTodoForm } from './forms';
import {
  renderProjectsContainer, renderTodoItems, renderTodoContainer, taskListDiv, renderProjectItems,
} from './views';

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
  // myProjects[index].taskList.push(t);
  myProjects[index].taskList[t.id] = t; // With task.id as property of task object

  // form.style.display = 'none'; // This would remove form when done button is hit

  // open form for creating tasks  // After new task button
};

// Captures task form values and push it as obj into prop taskList of specific myProjects item
const createTasks = (projectName) => {
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

    let selectedValue;

    priority.forEach(item => {
      if (item.checked) {
        selectedValue = item.value;
      }
    });

    const task = new Task(
      input.value,
      textarea.value,
      deadline.value,
      selectedValue,
      false,
    );

    // finds out what Project has this project name
    const indexOfWorkingProject = myProjects.indexOf(findProject(projectName));

    addTaskToProject(task, indexOfWorkingProject);

    form.reset();
    input.focus();

    // Sends task to renderer
    renderTodoItems(indexOfWorkingProject);
  });

  doneBtn.addEventListener('click', e => {
    e.preventDefault();
    form.style.display = 'none';
    h5.classList.add('d-none');
  });
};

const editTask = task => {
  box.innerHTML = '';
  newTodoForm();
}
const addProject = p => {
  const project = new Project(p); // Creates project with name specified in form
  myProjects.push(project);

  renderTodoContainer(p);
  createTasks(p);
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
  createTasks(pName);
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

// buttons delete and status of each task item
const taskEditActions = (e) => {
  const currentTaskPrj = document.getElementsByTagName('a')[0].id; // Gets name of current prj
  const prjIndex = myProjects.indexOf(findProject(currentTaskPrj));

  if (e.target.classList.contains('fa-check-circle')) {
    myProjects[prjIndex].taskList[e.target.id].status = true;
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-minus-circle')) {
    delete myProjects[prjIndex].taskList[e.target.id];
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-undo-alt')) {
    myProjects[prjIndex].taskList[e.target.id].status = false;
    renderTodoItems(prjIndex);
  } else if (e.target.classList.contains('fa-edit')) {
    editTask(myProjects[prjIndex].taskList[e.target.id]);
  }
  e.stopPropagation();
};

taskListDiv.addEventListener('click', (e) => {
  taskEditActions(e);
});

export {
  createNewProject, editProjects, showProjectItems,
};