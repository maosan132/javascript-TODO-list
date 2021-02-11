// file to render:
// - html for todo lists


//empty container:
<div class="container ">
  <h1 class="text-center my-5">Todo List Creator</h1>
  <form id="form">
    <input type="text" placeholder="Add task" class="form-control my-2" id="input" autofocus>
    <button class="btn btn-block btn-primary" type="submit">Add</button>
  </form>
  <div id="task-list" class="mt-3">
    <div class="alert alert-warning">There are not tasks yet. Let's create a new one.</div>
  </div>
</div>

//template:

<div id="task-list" class="mt-3">
  <div role="alert" class="alert alert-warning d-flex justify-content-between align-items-center"><span>Wash
      dishes</span>
    <h3 class="m-0"><i class="fa fa-check-circle text-success mr-2" role="button"></i><i
        class="fa fa-minus-circle text-danger" role="button"></i></h3>
  </div>
  <div role="alert" class="alert alert-warning d-flex justify-content-between align-items-center"><span>Walk
      dog</span>
    <h3 class="m-0"><i class="fa fa-check-circle text-success mr-2" role="button"></i><i
        class="fa fa-minus-circle text-danger" role="button"></i></h3>
  </div>
</div>