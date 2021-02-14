

const form = document.getElementById('todo-form')
const input = document.getElementById('input');
const textarea = document.querySelector('textarea');
const deadline = document.querySelector('input[type=date]');
const priority = document.querySelectorAll('input[type=radio]');
const taskList = document.getElementById('task-list');
const template = document.getElementById('template-task').content
const fragment = document.createDocumentFragment();

// let tasks = {
//   6345634563: {
//     id: 6345634563,
//     title: 'first task',
//     //description: ,
//     // date:,
//     status: false
//   },
// }

let tasks = {} 

//console.log(Date.now());
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  renderTasks()
})

form.addEventListener('submit', e => { 
  e.preventDefault()
  //console.log(e.target[0].value)
  //console.log(input.value);

  setTask(e)
})

taskList.addEventListener('click', (e) => {
  btnAction(e)
})

const resetForm = () => {

}

const setTask = e => {
  console.log(textarea.value);
  if(input.value.trim() === '') {
    //console.log('empty')
    return
  }

  let selectedValue;
  for (const radio of priority) {
      if (radio.checked) {
        console.log(radio.value);
          selectedValue = radio.value;
          break;
      }
  };

  const task = {
    id: Date.now(),
    title: input.value,
    description: textarea.value,
    date: deadline.value,
    priority: selectedValue,
    status: false,
  }
  
  console.log(tasks);

  tasks[task.id] = task
  // tasks[task.id] = {...task}

  //console.log('click');
  form.reset()
  input.focus()

  renderTasks()
}

const renderTasks = () => {

  localStorage.setItem('tasks', JSON.stringify(tasks))

  if (!Object.values(tasks).length) {
    taskList.innerHTML = `
    <div class="alert alert-dark">There are not tasks yet. Let's create a new one.</div>
    `
    return 
  }

  taskList.innerHTML =''
  Object.values(tasks).forEach(task => {
    console.log(task);
    const clone = template.cloneNode(true)

    if (task.status) {
      clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
      clone.querySelector('.fa-check-circle ').classList.replace('fa-check-circle', 'fa-undo-alt')
      clone.querySelector('p').style.textDecoration = 'line-through'
    } else {
      clone.querySelector('.alert').classList.replace('alert-primary', 'alert-danger')
    }
    clone.querySelector('p').textContent = task.title
    clone.querySelector('.fas').dataset.id = task.id
    clone.querySelectorAll('.fas')[1].dataset.id = task.id
    //clone.querySelectorAll('.fas')[2].dataset.id = task.id
    fragment.appendChild(clone)
  })
  taskList.appendChild(fragment)
}

const btnAction = (e) => {
   if (e.target.classList.contains('fa-check-circle')) {
     tasks[e.target.dataset.id].status = true
     renderTasks()
   } else if (e.target.classList.contains('fa-minus-circle')) {
      delete tasks[e.target.dataset.id]
      renderTasks()
    } else if (e.target.classList.contains('fa-undo-alt')) {
        tasks[e.target.dataset.id].status = false
        renderTasks()
  }
   e.stopPropagation()
}

export {newTodo};