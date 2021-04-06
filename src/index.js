import './style.css';
import {
  createNewProject, editProjects, showProjectItems,
} from './controller';
import { myProjects } from './project-model';

localStorage.setItem('projects', JSON.stringify(myProjects));

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('projects')) {
    myProjects = JSON.parse(localStorage.getItem('projects'));
  }
});

const menu = document.getElementById('menu');

const selectActions = e => {
  const menuChoice = e.target.id;

  switch (menuChoice) {
    case 'new':
      createNewProject();
      break;
    case 'default':
      editProjects('Default');
      break;
    case 'projects':
      showProjectItems();
      break;
    default:
      break;
  }
};

menu.addEventListener('click', e => {
  e.preventDefault();
  selectActions(e);
});