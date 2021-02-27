/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"editProjects\": () => (/* binding */ editProjects),\n/* harmony export */   \"showProjectItems\": () => (/* binding */ showProjectItems)\n/* harmony export */ });\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-model */ \"./src/task-model.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n// import { cleanBox } from './helper';\n\n\n\nconst validateProjectName = (nameInput) => {\n  const checkValue = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.includes(nameInput.value);\n  if (checkValue) {\n    nameInput.style.color = 'red';\n    nameInput.value = `${nameInput.value} exists, choose another project name `;\n    return true;\n  }\n  return false;\n};\n\n// Finds specific project to work with when inserting todo lists\nconst findProject = title => _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(p => p.name === title);\n\nconst addTaskToProject = (t, index) => {\n  // myProjects[index].taskList.push(t);\n  _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[index].taskList[t.id] = t; // With task.id as property of task object\n\n  // form.style.display = 'none'; // This would remove form when done button is hit\n\n  // open form for creating tasks  // After new task button\n};\n\n// Captures task form values and push it as obj into prop taskList of specific myProjects item\nconst createTasks = (projectName) => {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.newTodoForm)();\n\n  const h5 = document.querySelector('h5');\n  const form = document.getElementById('todo-form');\n  const input = document.getElementById('input');\n  const textarea = document.querySelector('textarea');\n  const deadline = document.querySelector('input[type=date]');\n  const priority = document.querySelectorAll('input[type=radio]');\n  const doneBtn = document.getElementById('done-btn');\n\n  // captures data from form then push them into task object inside project\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n\n    let selectedValue;\n\n    priority.forEach(item => {\n      if (item.checked) {\n        selectedValue = item.value;\n      }\n    });\n\n    const task = new _task_model__WEBPACK_IMPORTED_MODULE_1__.default(\n      input.value,\n      textarea.value,\n      deadline.value,\n      selectedValue,\n      false,\n    );\n\n    // finds out what Project has this project name\n    const indexOfWorkingProject = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(findProject(projectName));\n\n    addTaskToProject(task, indexOfWorkingProject);\n\n    form.reset();\n    input.focus();\n\n    // Sends task to renderer\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(indexOfWorkingProject);\n  });\n\n  doneBtn.addEventListener('click', e => {\n    e.preventDefault();\n    form.style.display = 'none';\n    h5.classList.add('d-none');\n  });\n};\n\nconst addProject = p => {\n  const project = new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project(p); // Creates project with name specified in form\n  _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(project);\n\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoContainer)(p);\n  createTasks(p);\n};\n\n// *****First menu option*****\nconst createNewProject = () => {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.newProjectForm)(); // puts the form inside box\n  const saveButton = document.querySelector('button');\n\n  saveButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    const nameInput = document.querySelector('input.form-control');\n\n    if (!validateProjectName(nameInput)) {\n      const projectName = nameInput.value;\n      addProject(projectName);\n    }\n  });\n};\n\n// *****Second menu option*****\nconst editProjects = (pName) => {\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoContainer)(pName);\n  createTasks(pName);\n};\n\n// *****Third menu option*****\nconst showProjectItems = () => {\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderProjectsContainer)();\n  (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderProjectItems)();\n  const projects = document.querySelectorAll('.alert');\n  projects.forEach(item => {\n    item.addEventListener('click', (e) => {\n      e.stopPropagation();\n      editProjects(e.target.textContent);\n    });\n  });\n};\n\n// buttons delete and status of each task item\nconst taskEditActions = (e) => {\n  const currentTaskPrj = document.getElementsByTagName('a')[0].id; // Gets name of current prj\n  const prjIndex = _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(findProject(currentTaskPrj));\n\n  if (e.target.classList.contains('fa-check-circle')) {\n    _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[prjIndex].taskList[e.target.id].status = true;\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  } else if (e.target.classList.contains('fa-minus-circle')) {\n    delete _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[prjIndex].taskList[e.target.id];\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  } else if (e.target.classList.contains('fa-undo-alt')) {\n    _project_model__WEBPACK_IMPORTED_MODULE_0__.myProjects[prjIndex].taskList[e.target.id].status = false;\n    (0,_views__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(prjIndex);\n  }\n  e.stopPropagation();\n};\n\n_views__WEBPACK_IMPORTED_MODULE_3__.taskListDiv.addEventListener('click', (e) => {\n  taskEditActions(e);\n});\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/controller.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectForm\": () => (/* binding */ newProjectForm),\n/* harmony export */   \"newTodoForm\": () => (/* binding */ newTodoForm),\n/* harmony export */   \"box\": () => (/* binding */ box)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst box = document.getElementById('box');\n\nconst renderForms = (title, form, btn = false) => {\n  box.append(title, form);\n  if (btn) { // adds a button to open form again\n    const addMoreTasksBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-success btn-lg ml3 col-6');\n    addMoreTasksBtn.classList.add('d-none'); // when form is hidden, and want to add more tasks again\n    addMoreTasksBtn.textContent = 'Add more tasks';\n    box.append(addMoreTasksBtn);\n  }\n};\n\nconst newProjectForm = () => {\n  box.innerHTML = '';\n  const projectFormTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'New Project');\n  const projectForm = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('form', 'class', 'justify-content-start align-items-start');\n  projectForm.classList.add('p-2', 'border');\n  const projectFormGroup = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex align-items-center');\n  const projectFormLabel = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Name:');\n  const projectFormInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control');\n  const projectSubmitBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');\n  projectSubmitBtn.textContent = 'Save';\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(projectFormInput, {\n    type: 'text', placeholder: 'Name of this project', required: '', autofocus: '',\n  });\n  projectSubmitBtn.setAttribute('type', 'submit');\n\n  projectFormGroup.append(projectFormLabel, projectFormInput);\n  projectForm.append(projectFormGroup, projectSubmitBtn);\n\n  renderForms(projectFormTitle, projectForm);\n};\n\nconst newTodoForm = () => {\n  const taskFormTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h5', 'class', 'py-2 text-danger', 'New Task');\n  const taskForm = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('form', 'class', 'pb-4 border p-2');\n  taskForm.id = 'todo-form';\n  const taskFormGroup1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex');\n  const taskFormLabel1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Name:');\n  const taskFormInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control justify-content-center');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(taskFormInput, {\n    type: 'text', placeholder: 'Name of task', required: '', autofocus: '', id: 'input',\n  });\n  const taskFormGroup2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex');\n  const taskFormLabel2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Description:');\n  const textArea = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('textarea', 'class', 'form-control');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(textArea, { placeholder: 'Description here', required: '' });\n  const taskFormGroup3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex align-items-center');//\n  const taskFormLabel3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'col-4 mb-0', 'Due Date:');\n  const dateInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control');\n  dateInput.setAttribute('type', 'date');\n  const taskFormGroup4 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex justify-content-around');\n  const taskFormLabel4 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'nul', 'Priority:');\n  const radio1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('High');\n  const radio2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Normal');\n  const radio3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Low');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Normal');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createRadios)('Low');\n  const submitBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg col-6 mx-2');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.textContent = 'Add it!';\n  const doneBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('a', 'class', 'btn btn-info btn-lg ml3 col-4 mx-2'); // hides form\n  doneBtn.id = 'done-btn';\n  doneBtn.textContent = 'Done';\n\n  taskFormGroup1.append(taskFormLabel1, taskFormInput);\n  taskFormGroup2.append(taskFormLabel2, textArea);\n  taskFormGroup3.append(taskFormLabel3, dateInput);\n  taskFormGroup4.append(taskFormLabel4, radio1, radio2, radio3);\n  taskForm.append(taskFormGroup1, taskFormGroup2, taskFormGroup3,\n    taskFormGroup4, submitBtn, doneBtn);\n\n  renderForms(taskFormTitle, taskForm, true);\n};\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/forms.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes),\n/* harmony export */   \"createRadios\": () => (/* binding */ createRadios)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n  // for (const key in attrs) {\n  //   el.setAttribute(key, attrs[key]);\n  // }\n};\n\nconst createRadios = (val) => {\n  const div = addDomElem('div', 'class', 'form-check', val);\n  const input = addDomElem('input', 'class', 'form-check-input');\n  setAttributes(input, { type: 'radio', name: 'choice', value: val });\n  div.appendChild(input);\n  return div;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n\n\n\nlocalStorage.setItem('projects', JSON.stringify(_project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects));\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('lstorage');\n  if (localStorage.getItem('projects')) {\n    _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects = JSON.parse(localStorage.getItem('projects'));\n  }\n});\n\nconst menu = document.getElementById('menu');\n\nconst selectActions = e => {\n  const menuChoice = e.target.id;\n\n  switch (menuChoice) {\n    case 'new':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.createNewProject)();\n      break;\n    case 'default':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.editProjects)('Default');\n      break;\n    case 'projects':\n      (0,_controller__WEBPACK_IMPORTED_MODULE_0__.showProjectItems)();\n      break;\n    default:\n      break;\n  }\n};\n\nmenu.addEventListener('click', e => {\n  e.preventDefault();\n  selectActions(e);\n});\n\n//# sourceURL=webpack://javascript-TODO-app/./src/index.js?");

/***/ }),

/***/ "./src/project-model.js":
/*!******************************!*\
  !*** ./src/project-model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"defaultPrj\": () => (/* binding */ defaultPrj)\n/* harmony export */ });\nfunction Project(name, taskList = []) {\n  this.name = name;\n  this.taskList = taskList;\n}\n\n// Create methods of Project: Delete, edit, create new, getProjectByName, validateProjectName,\n\n// Project.prototype.edit = function () {\n// };\n\n\n// class Project {\n//   constructor(name, taskList = []) {\n//     this.name = name;\n//     this.taskList = taskList;|\n//   }\n// }\n\nconst defaultPrj = new Project('Default');\n\nconst myProjects = []; // an array which will contain a list of projects\n\nmyProjects.push(defaultPrj);\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/project-model.js?");

/***/ }),

/***/ "./src/task-model.js":
/*!***************************!*\
  !*** ./src/task-model.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction Task(name, description, date, priority, status = false) {\n  this.id = Date.now();\n  this.name = name;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n  this.status = status;\n}\n\n// class Task {\n//   constructor(id, name, description, date, priority, status = false) {\n// /*eslint-disable */\n//     /* eslint-enable */\n// this.id = id;\n// this.name = name;\n// this.description = description;\n// this.date = date;\n// this.priority = priority;\n// this.status = status;\n//   }\n// }\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/task-model.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectsContainer\": () => (/* binding */ renderProjectsContainer),\n/* harmony export */   \"renderProjectItems\": () => (/* binding */ renderProjectItems),\n/* harmony export */   \"renderTodoContainer\": () => (/* binding */ renderTodoContainer),\n/* harmony export */   \"renderTodoItems\": () => (/* binding */ renderTodoItems),\n/* harmony export */   \"taskListDiv\": () => (/* binding */ taskListDiv)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-model */ \"./src/project-model.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\n\nconst taskListDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'mt-3');\nconst projectsListDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'mt-3'); // Inside this the boxes with every project\n\n// Render each project *third menu button*\nconst renderProjectItems = () => {\n  const template = document.getElementById('template-project').content;\n  const fragment = document.createDocumentFragment();\n  const projectDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'alert alert-danger d-flex align-items-center');\n  projectDiv.classList.add('justify-content-between');\n  projectDiv.setAttribute('role', 'button');\n  const projectName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'm-0');\n  // const iconH3 = addDomElem('h3', 'class', 'm-0');\n  // const trashIcon = addDomElem('i', 'class', 'fa fa-times-circle text-danger');\n  // trashIcon.setAttribute('role', 'button');\n  projectDiv.append(projectName);\n  // iconH3.append(trashIcon);\n\n  projectsListDiv.innerHTML = '';\n  _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.forEach(item => {\n    const clone = template.cloneNode(true);\n    clone.querySelector('p').textContent = item.name;\n    fragment.appendChild(clone);\n  });\n\n  return projectsListDiv.appendChild(fragment);\n};\n\n// renders the projects container\nconst renderProjectsContainer = () => {\n  const projectTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'Projects');\n  const projectPara = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-center');\n  projectPara.textContent = 'Select a project and start adding your Todo tasks:\\n';\n  // const homeBtnTemp = addDomElem('button', 'class', 'btn btn-primary btn-lg d-flex mb-2');\n  // homeBtnTemp.classList.add('align-items-center');\n  // homeBtnTemp.textContent = 'Projects';\n  // const homeBtn = homeBtnTemp.appendChild(addDomElem('i', 'class', 'fa fa-home', 'Home'));\n  // homeBtn.setAttribute('type', 'button');\n\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.innerHTML = '';\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.append(projectTitle, projectPara, projectsListDiv);\n};\n\n// Renders every task item inside projectsListDiv\nconst renderTodoItems = (index) => {\n  const template = document.getElementById('template-task').content;\n  const fragment = document.createDocumentFragment();\n  const taskDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'alert alert-warning align-items-center');\n  const firstRow = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'd-flex justify-content-between');\n  const date = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('span', 'id', 'date');\n  const taskName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'm-0');\n  const buttonsH3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h3', 'class', 'm-0');\n  const checkIcon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fas fa-check-circle text-success mr-2');\n  const deleteIcon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fas fa-minus-circle text-danger');\n  checkIcon.setAttribute('role', 'button');\n  deleteIcon.setAttribute('role', 'button');\n  const hrTag = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('hr', 'class', 'm-0');\n  const secondRow = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'd-flex justify-content-between');\n  const description = document.createElement('span');\n  const iconH4 = document.createElement('h4');\n  const priorityIcon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fa fa-battery-half');\n\n  buttonsH3.append(checkIcon, deleteIcon);\n  firstRow.append(date, taskName, buttonsH3);\n  iconH4.appendChild(priorityIcon);\n  secondRow.append(description, iconH4);\n  taskDiv.append(firstRow, hrTag, secondRow);\n\n  // If there are not tasks to display, puts a message\n  if (!Object.values(_project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects[index].taskList).length) {\n    taskListDiv.innerHTML = `\n    <div class=\"alert alert-dark\">There are not tasks yet. Let's create a new one.</div>\n    `;\n    return;\n  }\n\n  taskListDiv.innerHTML = '';\n\n  Object.values(_project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects[index].taskList).forEach(task => {\n    const clone = template.cloneNode(true);\n    if (task.status) {\n      clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary');\n      clone.querySelector('.fa-check-circle ').classList.replace('fa-check-circle', 'fa-undo-alt');\n      clone.querySelector('p').style.textDecoration = 'line-through';\n    } else {\n      clone.querySelector('.alert').classList.replace('alert-primary', 'alert-danger');\n    }\n\n    if (task.priority === 'High') {\n      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-full');\n    } else if (task.priority === 'Low') {\n      clone.querySelector('.fa-battery-half').classList.replace('fa-battery-half', 'fa-battery-empty');\n    }\n\n    clone.querySelector('p').textContent = task.name;\n    clone.querySelectorAll('span')[1].textContent = task.description;\n    clone.getElementById('date').textContent = task.date;\n\n    clone.querySelector('.fas').id = task.id;\n    clone.querySelectorAll('.fas')[1].id = task.id;\n    fragment.appendChild(clone);\n  });\n  taskListDiv.appendChild(fragment);\n};\n\n// renders the div containing of each task to do\nconst renderTodoContainer = (pName) => {\n  // bring project name here\n  const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', `Todo List - ${pName} project`);\n  const taskIdentifier = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('a', 'id', `${pName}`, ''); // For grabbing task\n  // const paragraph = addDomElem('p', 'class', 'text-center', 'Start adding some tasks:\\n');\n\n  const project = _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.find(project => project.name === pName);\n  const projectIndex = _project_model__WEBPACK_IMPORTED_MODULE_1__.myProjects.indexOf(project);\n  renderTodoItems(projectIndex);\n\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.innerHTML = '';\n  _forms__WEBPACK_IMPORTED_MODULE_2__.box.append(title, taskIdentifier, taskListDiv);\n};\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/views.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;