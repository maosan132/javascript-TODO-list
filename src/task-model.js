function Task(name, description, date, priority, status = false) {
  this.id = Date.now();
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


export { Task as default };