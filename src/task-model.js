function Task(name, description, date, priority, status = false) {
  this.id = Date.now();
  this.name = name;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.status = status;
}
module.exports = Task;
export { Task as default };