import { Project, myProjects } from './project-model';
import { Task } from './task-model';
import { newProjectForm, newTodoForm } from './forms';
import { renderProjectItems, renderProjectsContainer, renderTodos } from './views';

// const form = document.forms[0];


// renderProjectsContainer();


const addProject = (elem) => {
  const project = new Project(elem);
  myProjects.push(project);
  console.log('projects', myProjects);
  // form.style.display = 'none';

  // open form for creating tasks

  //renderProjectItems();
};

const validateProjectName = (val) => {
  if (MyProjects.includes(val)) {
    nameInput.style.color = 'red';
    nameInput.value = `${val} exists, choose another project name `;
    const result = true;
  }
  return result;
};

const createNewProject = () => {
  newProjectForm(); // puts the form inside box

  const submitButton = document.querySelector('button');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input.form-control');

    if (!validateProjectName(nameInput.value)) {
      // console.log('input was: ', nameInput.value);
      const projectName = nameInput.value;
      addProject(projectName);
    }
  });
};

// newTaskForm();

// Finds specific project to work with
const findProject = (title) => {
  myProjects.find(item => item.name === title);
};

// creates task dom elements like title, explanation and form, then retrieve data and push it into tasks and myProjects
const createTasks = (projectName) => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('input');
  const textarea = document.querySelector('textarea');
  const deadline = document.querySelector('input[type=date]');
  const priority = document.querySelectorAll('input[type=radio]');
  //const taskList = document.getElementById('task-list');

  // idea: build tasks inside named project

  // displays just the todo form
  newTodoForm();

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

    // const task = {
    //   id: Date.now(),
    //   title: input.value,
    //   description: textarea.value,
    //   date: deadline.value,
    //   priority: selectedValue,
    //   status: false,
    // };

    // push task obj into taskList prop of Prj:
    console.log(tasks);

    const workingProjectIndex = myProjects.indexOf(findProject(projectName));
 
    myProjects.taskList.push(task);

    tasks[task.id] = task;
    // tasks[task.id] = {...task}

    // console.log('click');
    form.reset();
    input.focus();

    renderTasks();
  });

  // renders the divs of each tasks

  // continue until end list of items, ie hit back/home button

  // hide from and go to home page

  return 
};

const listProjects = () => {

  return 
};

const editDefaultProject = () => {
  createTasks('Default');
};

export {
  createNewProject, createTasks,
};
