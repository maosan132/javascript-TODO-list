class Project {
  constructor(name, taskList = []){
    this.name = name;
    this.tasklist = taskList;
  }
};

class Task {
  constructor(id = Date.now(), name, description, date, priority, status = false){

      this.id = id,
      this.name = name,
      this.description = description,
      this.date = date,
      this.priority = priority,
      this.status = status
  }
};

let myProjects = [];


const defaultProject =  new Project('Default Project');

export {Project, Task, myProjects};