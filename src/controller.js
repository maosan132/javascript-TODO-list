import { Project, myProjects } from './model';
import { newProjectForm } from './forms';
import { renderProjectItems, renderProjectsContainer } from './views';

// const form = document.forms[0];


renderProjectsContainer();


const addProject = (elem) => {
  const project = new Project(elem);
  myProjects.push(project);
  // console.log('projects', myProjects);
  // form.style.display = 'none';

  renderProjectItems();
};


const createNewProject = () => {
  newProjectForm();

  const submitButton = document.querySelector('button');
  submitButton.addEventListener('click', (e) => {
    const nameInput = document.querySelector('input.form-control');
    e.preventDefault();
    // console.log('input was: ', nameInput);

    const projectName = nameInput.value;
    addProject(projectName);
  });
};

// newTaskForm();


export default createNewProject;