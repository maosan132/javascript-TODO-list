import {
  createNewProject, editDefaultProject, showProjectItems
} from './controller';

const menu = document.getElementById('menu');

const selectActions = e => {
  // console.log(e.target.id);

  const menuChoice = e.target.id;

  switch (menuChoice) {
    case 'new':
      console.log('clicked on ', 'new');
      createNewProject();
      break;
    case 'default':
      console.log('clicked on ', 'default');
      editDefaultProject();
      break;
    case 'projects':
      console.log('clicked on ', 'projects');
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