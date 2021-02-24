import { Project, myProjects } from './project-model';
import { Task } from './task-model';
import { newProjectForm, newTodoForm } from './forms';
import {
  renderProjectItems, renderTodoItems, renderTodoContainer, taskListDiv,
} from './views';

// const form = document.forms[0];


// renderProjectsContainer();

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
const findProject = (title) => {
  return myProjects.find(item => item.name === title);
};

const addTaskToProject = (t, index) => {
  // myProjects[index].taskList.push(t);
  myProjects[index].taskList[t.id] = t; // With task.id as property of task object
  console.log('project updated:', myProjects[index].name);

  // form.style.display = 'none'; // This would remove form when done button is hit

  // open form for creating tasks  // After new task button
};

// Captures task form values and push it as obj into prop taskList of specific myProjects item
const createTasks = (projectName) => {
  renderTodoContainer(projectName);
  newTodoForm();

  const form = document.getElementById('todo-form');
  const input = document.getElementById('input');
  const textarea = document.querySelector('textarea');
  const deadline = document.querySelector('input[type=date]');
  const priority = document.querySelectorAll('input[type=radio]');

  // captures data from form then push them into task object inside project
  form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log(e.target[0].value);
    // console.log(input.value);
    // console.log('hello', e);
    // console.log(textarea.value);

    let selectedValue;

    // for (const elem of priority) {
    //     if (radio.checked) {
    //       // console.log(elem.value);
    //         selectedValue = radio.value;
    //         break;
    //     }
    // };

    priority.forEach(item => {
      if (item.checked) {
      // console.log(radio.value);
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
    taskListDiv.appendChild(renderTodoItems(indexOfWorkingProject));
  });
};

const addProject = (p) => {
  const project = new Project(p);
  myProjects.push(project);
  console.log('projects', myProjects);

  // form.style.display = 'none';

  // open form for creating tasks

  // Go to a function with a button to create another project, *later*

  // renderProjectItems();  // not now

  // Go to add tasks to this project !!!! *now*
  renderTodoContainer(p);
  createTasks(p);
};

// *****First menu option*****
const createNewProject = () => {
  newProjectForm(); // puts the form inside box

  const submitButton = document.querySelector('button');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input.form-control');

    if (!validateProjectName(nameInput)) {
      // console.log('input was: ', nameInput.value);
      const projectName = nameInput.value;
      addProject(projectName);
    }
  });
};

// *****Second menu option*****
const editDefaultProject = () => {
  createTasks('Default');
};

// *****Third menu option*****
const showProjectItems = () => {
  renderProjectItems();
};

// buttons delete and finished of each task item
const taskBtnsAction = (e) => {
  const projectTask = document.getElementsByTagName('a')[0].id; // Name of the project owner of tasks
  if (e.target.classList.contains('fa-check-circle')) {
    const iconTarget = ;
    myProjects[e.target.id].status = true;
    renderTasks();
  } else if (e.target.classList.contains('fa-minus-circle')) {
    delete tasks[e.target.id];
    renderTasks();
  } else if (e.target.classList.contains('fa-undo-alt')) {
    tasks[e.target.id].status = false;
    renderTasks();
  }
  e.stopPropagation();
};

taskListDiv.addEventListener('click', (e) => {
  taskBtnsAction(e);
});

export {
  createNewProject, editDefaultProject, showProjectItems,
};
