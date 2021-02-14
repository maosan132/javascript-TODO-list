function Project(name, taskList = []) {
  this.name = name;
  this.taskList = taskList;
}
/*
class Project {
  constructor(name, taskList = []) {
    this.name = name;
    this.tasklist = taskList;
  }
}
*/
class Task {
  constructor(id = Date.now(), name, description, date, priority, status = false) {
/*eslint-disable */
    this.id = id,
    /* eslint-enable */
    this.name = name,
    this.description = description,
    this.date = date,
    this.priority = priority,
    this.status = status;
  }
}

const myProjects = [];


// const defaultProject = new Project('Default Project');

export { Project, Task, myProjects };