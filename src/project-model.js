function Project(name, taskList = []) {
  this.name = name;
  this.taskList = taskList;
}

// Create methods of Project: Delete project button, edit button, push new project, getProyectbyname, validateProjectName, 

Project.prototype.edit = function() {
  console.log('edit project:', this.name);
};


// class Project {
//   constructor(name, taskList = []) {
//     this.name = name;
//     this.tasklist = taskList;|
//   }
// }

const myProjects = []; // an array which will contain a list of projects


// const defaultProject = new Project('Default Project');

export {
  Project, myProjects,
};
