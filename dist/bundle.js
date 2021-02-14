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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views */ \"./src/views.js\");\n\n\n\n\n// const form = document.forms[0];\n\n\n(0,_views__WEBPACK_IMPORTED_MODULE_2__.renderProjectsContainer)();\n\n\nconst addProject = (elem) => {\n  const project = new _model__WEBPACK_IMPORTED_MODULE_0__.Project(elem);\n  _model__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(project);\n  // console.log('projects', myProjects);\n  // form.style.display = 'none';\n\n  (0,_views__WEBPACK_IMPORTED_MODULE_2__.renderProjectItems)();\n};\n\n\nconst createNewProject = () => {\n  (0,_forms__WEBPACK_IMPORTED_MODULE_1__.newProjectForm)();\n\n  const submitButton = document.querySelector('button');\n  submitButton.addEventListener('click', (e) => {\n    const nameInput = document.querySelector('input.form-control');\n    e.preventDefault();\n    // console.log('input was: ', nameInput);\n\n    const projectName = nameInput.value;\n    addProject(projectName);\n  });\n};\n\n// newTaskForm();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewProject);\n\n//# sourceURL=webpack://javascript-TODO-app/./src/controller.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectForm\": () => (/* binding */ newProjectForm),\n/* harmony export */   \"newTodoForm\": () => (/* binding */ newTodoForm),\n/* harmony export */   \"box\": () => (/* binding */ box)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n// file that contains forms for inputs for:\n// - project\n// - todo list\n\n\n\nconst box = document.getElementById('box');\n\nconst renderForms = (title, form) => {\n  box.append(title, form);\n};\n\nconst newProjectForm = () => {\n  const projectFormTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'New Project');\n  const projectForm = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('form', 'class', 'justify-content-start align-items-start');\n  projectForm.classList.add('p-2', 'border');\n  const projectFormGroup = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'form-group d-flex align-items-center');\n  const projectFormLabel = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('label', 'class', 'd-none', 'Name:');\n  const projectFormInput = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('input', 'class', 'form-control');\n  const projectSubmitBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');\n  projectSubmitBtn.classList.add('Save it!');\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(projectFormInput, { type: 'text', placeholder: 'Name of this project' });\n  // projectInput.setAttribute('type', 'text');\n  // projectInput.setAttribute('placeholder', 'Name of this project');\n  projectFormInput.attributes.required = '';\n  projectSubmitBtn.setAttribute('type', 'submit');\n\n  projectFormGroup.append(projectFormLabel, projectFormInput);\n  projectForm.append(projectFormGroup, projectSubmitBtn);\n\n\n  // const projectBox = document.getElementById('box');\n  renderForms(projectFormTitle, projectForm);\n};\n\nconst newTodoForm = () => {\n\n};\n\n\n/*\n//creator of Projects\n<h4 class=\"py-2\">New Project</h4>\n<form class=\"justify-content-start align-items-start p-2 border\">\n  <div class=\"form-group d-flex align-items-center\">\n  <label class=\"d-none\">Name:</label><input type=\"text\"\n      class=\"form-control\" placeholder=\"Name of this project\" required /></div>\n  <button class=\"btn btn-primary btn-lg mb-1 px-5\" type=\"submit\">Save it!</button>\n</form>\n\n// Creator of TODO\n<h4 class=\"py-2\">Project: Do Breakfast</h4><button class=\"btn btn-info btn-lg mb-4\"\ntype=\"button\">Add-TODO-list<br /></button>\n<form class=\"pb-4 border p-2\" id=\"todo-form\" name=\"form\">\n  <div class=\"form-group d-flex\"><label class=\"d-none\">Add a task:</label>\n    <input type=\"text\" class=\"form-control justify-content-center\" placeholder=\n    \"Add a task here\" id=\"input\" autofocus />\n  </div>\n  <div class=\"form-group d-flex\"><label class=\"d-none\">Task&#39;s Description:</label>\n    <textarea class=\"form-control\" placeholder=\"Task&#39;s Description:\" name=\"textarea\">\n    </textarea>\n  </div>\n  <div class=\"form-group d-flex align-items-center\"><label class=\"col-4 mb-0\">Due Date:</label>\n    <input class=\"form-control\" type=\"date\" />\n  </div>\n  <div class=\"form-group d-flex justify-content-around\"><label>Priority:</label>\n    <div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" name=\"choice\" value=\"High\"\n    />High</div>\n    <div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" name=\"choice\" value=\n    \"Normal\"/>Normal</div>\n    <div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" name=\"choice\" value=\n    \"Low\"/>Low</div>\n\n  </div>\n  <button class=\"btn btn-primary btn-block btn-lg\" type=\"submit\">Add it!</button>\n</form>\n*/\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/forms.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n  // for (const key in attrs) {\n  //   el.setAttribute(key, attrs[key]);\n  // }\n};\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nconst menu = document.getElementById('menu');\n\nconst selectActions = e => {\n  // console.log(e.target.id);\n\n  const menuChoice = e.target.id;\n\n  switch (menuChoice) {\n    case 'new':\n      // console.log('clicked on', 'new');\n      _controller__WEBPACK_IMPORTED_MODULE_0__.createNewProject();\n      break;\n    case 'default':\n      // console.log('clicked on', 'default');\n      // loader.editDefaultProject();\n      break;\n    case 'projects':\n      // console.log('clicked on', 'projects');\n      // loader.RenderAllProjects()\n      break;\n    default:\n      break;\n  }\n};\n\nmenu.addEventListener('click', e => {\n  e.preventDefault();\n  selectActions(e);\n});\n\n//# sourceURL=webpack://javascript-TODO-app/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects)\n/* harmony export */ });\nfunction Project(name, taskList = []) {\n  this.name = name;\n  this.taskList = taskList;\n}\n/*\nclass Project {\n  constructor(name, taskList = []) {\n    this.name = name;\n    this.tasklist = taskList;\n  }\n}\n*/\nclass Task {\n  constructor(id = Date.now(), name, description, date, priority, status = false) {\n/*eslint-disable */\n    this.id = id,\n    /* eslint-enable */\n    this.name = name,\n    this.description = description,\n    this.date = date,\n    this.priority = priority,\n    this.status = status;\n  }\n}\n\nconst myProjects = [];\n\n\n// const defaultProject = new Project('Default Project');\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/model.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectsContainer\": () => (/* binding */ renderProjectsContainer),\n/* harmony export */   \"renderProjectItems\": () => (/* binding */ renderProjectItems)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n\n\n\n// Render each project\n\nconst renderProjectItems = () => {\n  const template = document.getElementById('template-project').content;\n  const fragment = document.createDocumentFragment();\n  const projectsDiv = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'alert alert-primary d-flex justify-content-between align-items-center');\n  const projectName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'm-0');\n  const iconH3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h3', 'class', 'm-0');\n  const editIcon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fa fa-pencil-square text-success mr-2');\n  const trashIcon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fa fa-times-circle text-danger');\n\n  editIcon.setAttribute('role', 'button');\n  trashIcon.setAttribute('role', 'button');\n  projectsDiv.append(projectName, iconH3);\n  iconH3.append(editIcon, trashIcon);\n  projectsDiv.innerHTML = '';\n\n  _model__WEBPACK_IMPORTED_MODULE_1__.myProjects.forEach(item => {\n    // console.log('item name', item.name);\n    const clone = template.cloneNode(true);\n    // console.log('cloned item text', clone.querySelector('p').textContent);\n    clone.querySelector('p').textContent = item.name;\n    // console.log('clone:', clone);\n    fragment.appendChild(clone);\n    // console.log(myProjects);\n  });\n  projectsDiv.appendChild(fragment);\n};\n\n/*\n\n    <div class=\"alert alert-primary d-flex justify-content-between align-items-center\" id=\"default\">\n      <p class=\"m-0\">Default Project</p>\n      <h3 class=\"m-0\"><i class=\"fa fa-pencil-square text-success mr-2\" role=\"button\"></i><i\n          class=\"fa fa-times-circle text-danger\" role=\"button\"></i></h3>\n    </div>\n*/\n// project div delete project and edit buttons functions but in the controller\n\n/*\n\n\n<div id=\"task-list\" class=\"mt-3\">\n  <div role=\"alert\" class=\"alert alert-warning d-flex justify-content-between align-items-center\">\n    <span>Wash dishes</span>\n    <h3 class=\"m-0\"><i class=\"fa fa-check-circle text-success mr-2\" role=\"button\"></i><i\n        class=\"fa fa-minus-circle text-danger\" role=\"button\"></i></h3>\n  </div>\n</div>\n\n*/\n\n// All projects list\nconst renderProjectsContainer = () => {\n  const projectTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('h4', 'class', 'py-2', 'Projects');\n  const projectPara = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-center', 'Select a project and start adding your Todo tasks.\\n');\n  const projectList = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'mt-3');\n  const homeBtnTemp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('button', 'class', 'btn btn-primary btn-lg d-flex align-items-center mb-2', 'Projects');\n  const homeBtn = homeBtnTemp.appendChild((0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('i', 'class', 'fa fa-home', 'Home'));\n  homeBtn.setAttribute('type', 'button');\n  const projectBox = document.getElementById('box');\n\n  projectBox.append(projectTitle, projectPara, projectList, homeBtn);\n\n  renderProjectItems();\n};\n\n/*\n  <h4 class=\"py-2\">Projects</h4>\n  <p class=\"text-center\">Select a project and start adding your Todo tasks.<br /></p>\n  <div id=\"project-list\" class=\"mt-3\">\n\n  </div>\n  <button class=\"btn btn-primary btn-lg d-flex align-items-center mb-2\" type=\"button\"><i\n      class=\"fa fa-home\"></i>Home</button>\n\n  */\n\n// const renderTodos = () => {}\n\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/views.js?");

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