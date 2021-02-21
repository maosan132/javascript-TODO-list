import {createNewProject} from './controller';

const menu = document.getElementById('menu');

const selectActions = e => {
  // console.log(e.target.id);

  const menuChoice = e.target.id;

  switch (menuChoice) {
    case 'new':
<<<<<<< HEAD
      console.log('clicked on', 'new');
      createNewProject();
      break;
    case 'default':
      console.log('clicked on', 'default');
      // loader.editDefaultProject();
      break;
    case 'projects':
      console.log('clicked on', 'projects');
=======
      // console.log('clicked on', 'new');
      loader.createNewProject();
      break;
    case 'default':
      // console.log('clicked on', 'default');
      // loader.editDefaultProject();
      break;
    case 'projects':
      // console.log('clicked on', 'projects');
>>>>>>> c3d5fe66376c7bcd0d9b1ad7abbb0c146829b885
      // loader.RenderAllProjects()
      break;
    default:
      break;
  }
};

menu.addEventListener('click', e => {
  e.preventDefault();
  selectActions(e);
});