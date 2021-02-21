
import { addDomElem } from './helper';
import { myProjects } from './model';


const projectBox = document.getElementById('box'); // get box for painting html inside

// Render each project

const renderProjectItems = () => {
  const template = document.getElementById('template-project').content;
  const fragment = document.createDocumentFragment();
  const projectsDiv = addDomElem('div', 'class', 'alert alert-primary d-flex justify-content-between align-items-center');
  const projectName = addDomElem('p', 'class', 'm-0');
  const iconH3 = addDomElem('h3', 'class', 'm-0');
  const editIcon = addDomElem('i', 'class', 'fa fa-pencil-square text-success mr-2');
  const trashIcon = addDomElem('i', 'class', 'fa fa-times-circle text-danger');

  editIcon.setAttribute('role', 'button');
  trashIcon.setAttribute('role', 'button');
  projectsDiv.append(projectName, iconH3);
  iconH3.append(editIcon, trashIcon);
  //projectsDiv.innerHTML = '';

  myProjects.forEach(item => {
    console.log('item name', item.name);
    const clone = template.cloneNode(true);
    // console.log('cloned item text', clone.querySelector('p').textContent);
    clone.querySelector('p').textContent = item.name;
    console.log('clone:', clone);
    fragment.appendChild(clone);
    console.log(fragment);
  });
  projectsDiv.appendChild(fragment);
  console.log('should render fragment now');
};

/*

    <div class="alert alert-primary d-flex justify-content-between align-items-center" id="default">
      <p class="m-0">Default Project</p>
      <h3 class="m-0"><i class="fa fa-pencil-square text-success mr-2" role="button"></i><i
          class="fa fa-times-circle text-danger" role="button"></i></h3>
    </div>
*/
// project div delete project and edit buttons functions but in the controller


// renders the projects container
const renderProjectsContainer = () => {
  const projectTitle = addDomElem('h4', 'class', 'py-2', 'Projects');
  const projectPara = addDomElem('p', 'class', 'text-center', 'Select a project and start adding your Todo tasks.\n');
  const projectList = addDomElem('div', 'class', 'mt-3');
  const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex align-items-center mb-2', 'Projects');
  const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));
  homeBtn.setAttribute('type', 'button');

  projectBox.append(projectTitle, projectPara, projectList, homeBtn);

  renderProjectItems();

};

/*
  <h4 class="py-2">Projects</h4>
  <p class="text-center">Select a project and start adding your Todo tasks.<br /></p>
  <div id="project-list" class="mt-3">

  </div>
  <button class="btn btn-primary btn-lg d-flex align-items-center mb-2" type="button"><i
      class="fa fa-home"></i>Home</button>

  */

const renderTodoItems = () => {
  const renderTodoitems = () => {
  
  }
};


// renders the div containing of each task to do

const renderTodoContainer = () => {

  // bring project name here
  const title = addDomElem('h4', 'class', 'py-2', 'Todo List - project name');
  const paragraph = addDomElem('p', 'class', 'text-center', 'Start adding your tasks for this project\n');

  renderTodoItems();
};

/*
<div id="task-list" class="mt-3">
  <div role="alert" class="alert alert-warning d-flex justify-content-between align-items-center">
    <span>Wash dishes</span>
    <h3 class="m-0"><i class="fa fa-check-circle text-success mr-2" role="button"></i><i
        class="fa fa-minus-circle text-danger" role="button"></i></h3>
  </div>
</div> 

*/


export { renderProjectsContainer, renderProjectItems, renderTodoContainer, renderTodoitems };