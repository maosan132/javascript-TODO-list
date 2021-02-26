function Project(name, taskList = []) {
  this.name = name;
  this.taskList = taskList;
}

// Create methods of Project: Delete, edit, create new, getProjectByName, validateProjectName,

// Project.prototype.edit = function () {
//   console.log('edit project:', this.name);
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

export {
  Project, myProjects, defaultPrj,
};
