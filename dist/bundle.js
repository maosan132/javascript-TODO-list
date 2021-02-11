/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("// import files\n\nconst menu = document.getElementById('menu');\n\n\n\nmenu.addEventListener('click', e => {\n  e.preventDefault();\n  selectActions(e)\n})\n\nconst selectActions = e => {\n  console.log(e.target.id)\n  \n  let menuChoice = e.target.id\n\n  switch (menuChoice) {\n    case 'new':\n      console.log('clicked on','new');\n      newProject();\n      break;\n    case 'default':\n      console.log('clicked on','default');\n      defaultProject();\n      break;\n    case 'projects':\n      console.log('clicked on','projects');\n      RenderProjects()\n      break;\n  }\n}\n\n\n\n//# sourceURL=webpack://javascript-TODO-app/./src/index.js?");
/******/ })()
;