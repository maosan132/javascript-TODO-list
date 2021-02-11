// file that contains forms for inputs for:
// - project
// - todo list

///creator of Projects
<h4 class="py-2">New Project</h4>
<form class="justify-content-start align-items-start p-2 border">
  <div class="form-group d-flex align-items-center"><label class="d-none">Name:</label><input type="text"
      class="form-control" placeholder="Name of this project" required /></div><button
    class="btn btn-primary btn-lg mb-1 px-5" type="submit">Save it!</button>
</form>

// Creator of TODO
<h4 class="py-2">Project: Do Breakfast</h4><button class="btn btn-info btn-lg mb-4"
type="button">Add TODO list<br /></button>
<form class="pb-4 border p-2" id="todo-form" name="form">
  <div class="form-group d-flex"><label class="d-none">Add a task:</label>
    <input type="text" class="form-control justify-content-center" placeholder="Add a task here" id="input"
      autofocus />
  </div>
  <div class="form-group d-flex"><label class="d-none">Task&#39;s Description:</label>
    <textarea class="form-control" placeholder="Task&#39;s Description:" name="textarea"></textarea>
  </div>
  <div class="form-group d-flex align-items-center"><label class="col-4 mb-0">Due Date:</label>
    <input class="form-control" type="date" />
  </div>
  <div class="form-group d-flex justify-content-around"><label>Priority:</label>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value="High"/>High</div>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value="Normal"/>Normal</div>
    <div class="form-check"><input type="radio" class="form-check-input" name="choice" value="Low"/>Low</div>
    
  </div>
  <button class="btn btn-primary btn-block btn-lg" type="submit">Add it!</button>
</form>