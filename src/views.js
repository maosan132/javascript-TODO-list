import { addDomElem } from './helper';
import { myProjects } from './task-model';


const projectsBox = document.getElementById('box'); // get box for painting html inside
const projectDiv = addDomElem('div', 'class', 'alert alert-primary d-flex align-items-center');
// const taskDiv;
// Render each project

const renderProjectItems = () => {
  const template = document.getElementById('template-project').content;
  const fragment = document.createDocumentFragment();
  const projectName = addDomElem('p', 'class', 'm-0');
  const iconH3 = addDomElem('h3', 'class', 'm-0');
  const editIcon = addDomElem('i', 'class', 'fa fa-pencil-square text-success mr-2');
  const trashIcon = addDomElem('i', 'class', 'fa fa-times-circle text-danger');

  editIcon.setAttribute('role', 'button');
  trashIcon.setAttribute('role', 'button');
  projectDiv.append(projectName, iconH3);
  iconH3.append(editIcon, trashIcon);

  myProjects.forEach(item => {
    console.log('item name', item.name);
    const clone = template.cloneNode(true);
    // console.log('cloned item text', clone.querySelector('p').textContent);
    clone.querySelector('p').textContent = item.name;
    // console.log('clone:', clone);
    fragment.appendChild(clone);
    console.log(fragment);
  });
  projectDiv.appendChild(fragment);
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
  projectDiv.classList.add('justify-content-between');
  const projectPara = addDomElem('p', 'class', 'text-center', 'Select a project and start adding your Todo tasks.\n');
  const projectsList = addDomElem('div', 'class', 'mt-3');
  const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex align-items-center mb-2', 'Projects');
  const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));
  homeBtn.setAttribute('type', 'button');

  projectsBox.append(projectTitle, projectPara, projectsList, homeBtn);

  // renderProjectItems();

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
  const projectTitle = addDomElem('h4', 'class', 'py-2', 'Projects');
  const projectPara = addDomElem('p', 'class', 'text-center', 'Select a project and start adding your Todo tasks.\n');
  const projectList = addDomElem('div', 'class', 'mt-3');
  const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex align-items-center mb-2', 'Projects');
  const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));
  homeBtn.setAttribute('type', 'button');
};

// renders the div containing of each task to do

const renderTodoContainer = () => {

  // bring project name here
  const title = addDomElem('h4', 'class', 'py-2', 'Todo List - project name');
  const paragraph = addDomElem('p', 'class', 'text-center', 'Start adding your tasks for this project\n');

  projectsBox.append(title, paragraph, projectList, homeBtn);
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


export { renderProjectsContainer, renderProjectItems, projectDiv, renderTodoContainer, renderTodoItems };
