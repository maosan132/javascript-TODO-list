// file that contains forms for inputs for:
// - project
// - todo list

import { addDomElem, setAttributes, createRadios } from './helper';

const box = document.getElementById('box');

const renderForms = (title, form, btn = false) => {
  box.append(title, form);
  if (btn) { // adds a button to open form again
    const addMoreTasksBtn = addDomElem('button', 'class', 'btn btn-success btn-lg ml3 col-6');
    addMoreTasksBtn.classList.add('d-none'); // when form is hidden, and want to add more tasks again
    addMoreTasksBtn.textContent = 'Add more tasks';
    box.append(addMoreTasksBtn);
  }
};

const newProjectForm = () => {
  const projectFormTitle = addDomElem('h4', 'class', 'py-2', 'New Project');
  const projectForm = addDomElem('form', 'class', 'justify-content-start align-items-start');
  projectForm.classList.add('p-2', 'border');
  const projectFormGroup = addDomElem('div', 'class', 'form-group d-flex align-items-center');
  const projectFormLabel = addDomElem('label', 'class', 'd-none', 'Name:');
  const projectFormInput = addDomElem('input', 'class', 'form-control');
  const projectSubmitBtn = addDomElem('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');
  // projectSubmitBtn.classList.add('Save it!');  // weird stuff!
  projectSubmitBtn.textContent = 'Save';
  setAttributes(projectFormInput, {
    type: 'text', placeholder: 'Name of this project', required: '', autofocus: '',
  });
  projectSubmitBtn.setAttribute('type', 'submit');

  projectFormGroup.append(projectFormLabel, projectFormInput);
  projectForm.append(projectFormGroup, projectSubmitBtn);


  // const projectsBox = document.getElementById('box');
  renderForms(projectFormTitle, projectForm);
};

const newTodoForm = () => {
  const taskFormTitle = addDomElem('h4', 'class', 'py-2', 'New Task');
  const taskForm = addDomElem('form', 'class', 'pb-4 border p-2');
  taskForm.id = 'todo-form';
  const taskFormGroup1 = addDomElem('div', 'class', 'form-group d-flex');
  const taskFormLabel1 = addDomElem('label', 'class', 'd-none', 'Name:');
  const taskFormInput = addDomElem('input', 'class', 'form-control justify-content-center');
  setAttributes(taskFormInput, {
    type: 'text', placeholder: 'Name of task here', required: '', autofocus: '', id: 'input',
  });
  const taskFormGroup2 = addDomElem('div', 'class', 'form-group d-flex');
  const taskFormLabel2 = addDomElem('label', 'class', 'd-none', 'Description:');
  const textArea = addDomElem('textarea', 'class', 'form-control');
  setAttributes(textArea, { placeholder: 'Name of task here', required: '' });
  const taskFormGroup3 = addDomElem('div', 'class', 'form-group d-flex  align-items-center');
  const taskFormLabel3 = addDomElem('label', 'class', 'col-4 mb-0', 'Due Date:');
  const dateInput = addDomElem('input', 'class', 'form-control');
  dateInput.setAttribute('type', 'date');
  const taskFormGroup4 = addDomElem('div', 'class', 'form-group d-flex justify-content-around');
  const taskFormLabel4 = addDomElem('label', 'class', '', 'Priority:');
  const radio1 = createRadios('High');
  const radio2 = createRadios('Normal');
  const radio3 = createRadios('Low');
  createRadios('Normal');
  createRadios('Low');
  const submitBtn = addDomElem('button', 'class', 'btn btn-primary btn-lg col-6 mx-2');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.textContent = 'Add it!';
  const doneBtn = addDomElem('button', 'class', 'btn btn-info btn-lg ml3 col-4 mx-2'); // hides form
  doneBtn.textContent = 'Done';

  taskFormGroup1.append(taskFormLabel1, taskFormInput);
  taskFormGroup2.append(taskFormLabel2, textArea);
  taskFormGroup3.append(taskFormLabel3, dateInput);
  taskFormGroup4.append(taskFormLabel4, radio1, radio2, radio3);
  taskForm.append(taskFormGroup1, taskFormGroup2, taskFormGroup3, taskFormGroup4, submit, doneBtn);

  renderForms(projectFormTitle, projectForm, true);
};


/*
// Creator of TODO

*/

// Add a form for finding project by name! Using includes()

export { newProjectForm, newTodoForm, box };