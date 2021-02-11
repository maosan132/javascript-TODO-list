// import files

const menu = document.getElementById('menu');



menu.addEventListener('click', e => {
  e.preventDefault();
  selectActions(e)
})

const selectActions = e => {
  console.log(e.target.id)
  
  let menuChoice = e.target.id

  switch (menuChoice) {
    case 'new':
      console.log('clicked on','new');
      newProject();
      break;
    case 'default':
      console.log('clicked on','default');
      defaultProject();
      break;
    case 'projects':
      console.log('clicked on','projects');
      RenderProjects()
      break;
  }
}

