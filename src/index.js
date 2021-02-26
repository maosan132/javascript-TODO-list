import {
  createNewProject, editDefaultProject, showProjectItems
} from './controller';

const menu = document.getElementById('menu');

const selectActions = e => {
  // console.log(e.target.id);

  const menuChoice = e.target.id;

  switch (menuChoice) {
    case 'new':
      createNewProject();
      break;
    case 'default':
      editDefaultProject();
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