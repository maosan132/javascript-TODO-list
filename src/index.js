import {
  createNewProject, editProjects, showProjectItems,
} from './controller';

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