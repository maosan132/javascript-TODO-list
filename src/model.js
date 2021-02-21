function Project(name, taskList = []) {
  this.name = name;
  this.taskList = taskList;
}

// Create methods of Project: Delete project button, edit button




Project.prototype.edit = function() {
  console.log('edit project:', this.name);
};


// class Project {
//   constructor(name, taskList = []) {
//     this.name = name;
//     this.tasklist = taskList;| 
//   }
// }

function Task(name, description, date, priority, status = false) {
  // this.id = id;
  this.name = name;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.status = status;
}

// class Task {
//   constructor(id, name, description, date, priority, status = false) {
// /*eslint-disable */
//     /* eslint-enable */
// this.id = id;
// this.name = name;
// this.description = description;
// this.date = date;
// this.priority = priority;
// this.status = status;
//   }
// }

const myProjects = []; // an array which will contain a list of projects


// const defaultProject = new Project('Default Project');

export {
  Project, Task, myProjects,
};