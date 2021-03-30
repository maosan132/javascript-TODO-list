/* eslint-disable import/extensions */
import {
  addDomElem, setAttributes, createRadios,
} from './helper.js';

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
  box.innerHTML = '';
  const projectFormTitle = addDomElem('h4', 'class', 'py-2', 'New Project');
  const projectForm = addDomElem('form', 'class', 'justify-content-start align-items-start');
  projectForm.classList.add('p-2', 'border');
  const projectFormGroup = addDomElem('div', 'class', 'form-group d-flex align-items-center');
  const projectFormLabel = addDomElem('label', 'class', 'd-none', 'Name:');
  const projectFormInput = addDomElem('input', 'class', 'form-control');
  const projectSubmitBtn = addDomElem('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');
  projectSubmitBtn.textContent = 'Save';
  setAttributes(projectFormInput, {
    type: 'text', placeholder: 'Name of this project', required: '', autofocus: '',
  });
  projectSubmitBtn.setAttribute('type', 'submit');

  projectFormGroup.append(projectFormLabel, projectFormInput);
  projectForm.append(projectFormGroup, projectSubmitBtn);

  renderForms(projectFormTitle, projectForm);
};

const newTodoForm = (kind) => {
  const taskFormTitle = addDomElem('h5', 'class', 'py-2 text-danger', 'New Task');
  const taskForm = addDomElem('form', 'class', 'pb-4 border p-2');
  taskForm.id = 'todo-form';
  const taskFormGroup1 = addDomElem('div', 'class', 'form-group d-flex');
  const taskFormLabel1 = addDomElem('label', 'class', 'd-none', 'Name:');
  const taskFormInput = addDomElem('input', 'class', 'form-control justify-content-center');
  setAttributes(taskFormInput, {
    type: 'text', placeholder: 'Name of task', required: '', autofocus: '', id: 'input',
  });
  const taskFormGroup2 = addDomElem('div', 'class', 'form-group d-flex');
  const taskFormLabel2 = addDomElem('label', 'class', 'd-none', 'Description:');
  const textArea = addDomElem('textarea', 'class', 'form-control');
  setAttributes(textArea, { placeholder: 'Description here', required: '' });
  const taskFormGroup3 = addDomElem('div', 'class', 'form-group d-flex align-items-center');//
  const taskFormLabel3 = addDomElem('label', 'class', 'col-4 mb-0', 'Due Date:');
  const dateInput = addDomElem('input', 'class', 'form-control');
  dateInput.setAttribute('type', 'date');
  const taskFormGroup4 = addDomElem('div', 'class', 'form-group d-flex justify-content-around');
  const taskFormLabel4 = addDomElem('label', 'class', 'nul', 'Priority:');
  const radio1 = createRadios('High');
  const radio2 = createRadios('Normal');
  const radio3 = createRadios('Low');
  const defaultRadio = radio2.firstChild.nextSibling;
  defaultRadio.setAttribute('checked', 'checked');
  const submitBtn = addDomElem('button', 'class', 'btn btn-primary btn-lg col-6 mx-2');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.textContent = !kind ? 'Add it!' : 'Update task';
  const doneBtn = addDomElem('a', 'class', 'btn btn-info btn-lg ml3 col-4 mx-2'); // hides form
  doneBtn.id = 'done-btn';
  doneBtn.textContent = 'Done';

  taskFormGroup1.append(taskFormLabel1, taskFormInput);
  taskFormGroup2.append(taskFormLabel2, textArea);
  taskFormGroup3.append(taskFormLabel3, dateInput);
  taskFormGroup4.append(taskFormLabel4, radio1, radio2, radio3);
  taskForm.append(taskFormGroup1, taskFormGroup2, taskFormGroup3,
    taskFormGroup4, submitBtn);
  if (!kind) taskForm.appendChild(doneBtn);

  renderForms(taskFormTitle, taskForm, true);
};

export { newProjectForm, newTodoForm, box };