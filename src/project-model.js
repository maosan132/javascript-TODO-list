function Project(name, taskList = []) {
  this.name = name;
  this.taskList = taskList;
}

// Create methods of Project: Delete, edit, create new, getProjectByName, validateProjectName,

// Project.prototype.edit = function () {
// };


// class Project {
//   constructor(name, taskList = []) {
//     this.name = name;
//     this.taskList = taskList;|
//   }
// }

const defaultPrj = new Project('Default');

const myProjects = []; // an array which will contain a list of projects

myProjects.push(defaultPrj);

localStorage.setItem('projects', JSON.stringify(tasks));

export {
  Project, myProjects, defaultPrj,
};
