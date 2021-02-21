// file that contains forms for inputs for:
// - project
// - todo list

<<<<<<< HEAD
import { addDomElem, setAttributes, createRadios } from './helper';
=======
import { addDomElem, setAttributes } from './helper';
>>>>>>> c3d5fe66376c7bcd0d9b1ad7abbb0c146829b885

const box = document.getElementById('box');

const renderForms = (title, form) => {
  box.append(title, form);
};

const newProjectForm = () => {
  const projectFormTitle = addDomElem('h4', 'class', 'py-2', 'New Project');
  const projectForm = addDomElem('form', 'class', 'justify-content-start align-items-start');
  projectForm.classList.add('p-2', 'border');
  const projectFormGroup = addDomElem('div', 'class', 'form-group d-flex align-items-center');
  const projectFormLabel = addDomElem('label', 'class', 'd-none', 'Name:');
  const projectFormInput = addDomElem('input', 'class', 'form-control');
  const projectSubmitBtn = addDomElem('button', 'class', 'btn btn-primary btn-lg mb-1 px-5');
<<<<<<< HEAD
  // projectSubmitBtn.classList.add('Save it!');  // weird stuff!
  projectSubmitBtn.textContent = 'Save';
  setAttributes(projectFormInput, {
    type: 'text', placeholder: 'Name of this project', required: '', autofocus: '',
  });
=======
  projectSubmitBtn.classList.add('Save it!');
  setAttributes(projectFormInput, { type: 'text', placeholder: 'Name of this project' });
  // projectInput.setAttribute('type', 'text');
  // projectInput.setAttribute('placeholder', 'Name of this project');
  projectFormInput.attributes.required = '';
>>>>>>> c3d5fe66376c7bcd0d9b1ad7abbb0c146829b885
  projectSubmitBtn.setAttribute('type', 'submit');

  projectFormGroup.append(projectFormLabel, projectFormInput);
  projectForm.append(projectFormGroup, projectSubmitBtn);


  // const projectBox = document.getElementById('box');
  renderForms(projectFormTitle, projectForm);
};

const newTodoForm = () => {
<<<<<<< HEAD
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
  const taskSubmitBtn = addDomElem('button', 'class', 'btn btn-primary btn-block btn-lg');
  taskSubmitBtn.setAttribute('type', 'submit');
  taskSubmitBtn.textContent = 'Add it!';

  taskFormGroup1.append(taskFormLabel1, taskFormInput);
  taskFormGroup2.append(taskFormLabel2, textArea);
  taskFormGroup3.append(taskFormLabel3, dateInput);
  taskFormGroup4.append(taskFormLabel4, radio1, radio2, radio3);
  taskForm.append(taskFormGroup1, taskFormGroup2, taskFormGroup3, taskFormGroup4, taskSubmitBtn);

  renderForms(projectFormTitle, projectForm);
  
  const form = document.getElementById('todo-form');
  const input = document.getElementById('input');
  const textarea = document.querySelector('textarea');
  const deadline = document.querySelector('input[type=date]');
  const priority = document.querySelectorAll('input[type=radio]');

  const taskList = document.getElementById('task-list');
};

/*
// Creator of TODO
=======

};


/*
//creator of Projects
<h4 class="py-2">New Project</h4>
<form class="justify-content-start align-items-start p-2 border">
  <div class="form-group d-flex align-items-center">
  <label class="d-none">Name:</label><input type="text"
      class="form-control" placeholder="Name of this project" required /></div>
  <button class="btn btn-primary btn-lg mb-1 px-5" type="submit">Save it!</button>
</form>

// Creator of TODO
<h4 class="py-2">Project: Do Breakfast</h4><button class="btn btn-info btn-lg mb-4"
type="button">Add-TODO-list<br /></button>
<form class="pb-4 border p-2" id="todo-form" name="form">
  <div class="form-group d-flex"><label class="d-none">Add a task:</label>
    <input type="text" class="form-control justify-content-center" placeholder=
    "Add a task here" id="input" autofocus />
  </div>
  <div class="form-group d-flex"><label class="d-none">Task&#39;s Description:</label>
    <textarea class="form-control" placeholder="Task&#39;s Description:" name="textarea">
    </textarea>
  </div>
  <div class="form-group d-flex align-items-center"><label class="col-4 mb-0">Due Date:</label>
    <input class="form-control" type="date" />
  </div>
  <div class="form-group d-flex justify-content-around"><label>Priority:</label>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value="High"
    />High</div>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value=
    "Normal"/>Normal</div>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value=
    "Low"/>Low</div>
>>>>>>> c3d5fe66376c7bcd0d9b1ad7abbb0c146829b885

*/

// Add a form for finding project by name! Using includes()

export { newProjectForm, newTodoForm, box };