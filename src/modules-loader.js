//import {newProjectForm, newTodoForm} from './forms';
import {newProject} from './project-creator';
import {showProjects} from './project-renderer';


const createNewProject = () => {

  newProject();
};

const editDefaultProject = () => {

  newTodoForm('default');
};

const RenderAllProjects = () => {

  showProjects();
};

export {createNewProject, editDefaultProject, RenderAllProjects};