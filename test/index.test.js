beforeAll(async () => {
  await page.goto('http://localhost:5500/dist/?');
});

test('creates a new project', async () => {
  await page.click('#new');
  const input = await page.isVisible('#box > form > div > input');
  expect(input).toBe(true);
  await page.fill('#box > form > div > input', 'go shopping');
  await page.click('#box > form > button');
  const content = await page.textContent('#box > h4');
  expect(content).toMatch(/go shopping/);
  const title = await page.textContent('#box > h5');
  expect(title).toMatch(/New Task/);
  const nameField = await page.isVisible('#input');
  expect(nameField).toBe(true);
  const descField = await page.isVisible('#todo-form > div:nth-child(2) > textarea');
  expect(descField).toBe(true);
  const dateField = await page.isVisible(`#todo-form >
                                          div.form-group.d-flex.align-items-center > input`);
  expect(dateField).toBe(true);
  const radioBtns = await page.isVisible('#todo-form > div.form-group > div:nth-child(2) > input');
  expect(radioBtns).toBe(true);
  const AddItBtn = await page.isVisible('#todo-form > button');
  expect(AddItBtn).toBe(true);
  const doneBtn = await page.isVisible('#done-btn');
  expect(doneBtn).toBe(true);

  await page.fill('#input', 'Coffee');
  await page.fill('#todo-form > div:nth-child(2) > textarea', '1 pound of Red brand');
  await page.fill('#todo-form > div.form-group.d-flex.align-items-center > input', '2021-03-05');
  await page.click('#todo-form > button');
  const taskName = await page.textContent('#box > div > div > div:nth-child(1) > p');
  const taskDesc = await page.textContent('#box > div > div > div.d-flex.justify-content-between.align-items-baseline > span');
  const taskDate = await page.textContent('#date');

  expect(taskName).toMatch('Coffee');
  expect(taskDesc).toMatch('1 pound of Red brand');
  expect(taskDate).toMatch('2021-03-05');
});

test('edits default project', async () => {
  await page.click('#default');
  const title = await page.isVisible('#box > form > div > input');
  expect(title).toBe(true);
  const titleText = await page.textContent('#box > h4');
  expect(titleText).toMatch('Todo List - Default project');
  const subTtl = await page.textContent('#box > h5');
  expect(subTtl).toMatch(/New Task/);

  const nameField = await page.isVisible('#input');
  expect(nameField).toBe(true);
  const descField = await page.isVisible('#todo-form > div:nth-child(2) > textarea');
  expect(descField).toBe(true);
  const dateField = await page.isVisible(`#todo-form >
                                          div.form-group.d-flex.align-items-center > input`);
  expect(dateField).toBe(true);
  const radioBtns = await page.isVisible('#todo-form > div.form-group > div:nth-child(2) > input');
  expect(radioBtns).toBe(true);
  const AddItBtn = await page.isVisible('#todo-form > button');
  expect(AddItBtn).toBe(true);
  const doneBtn = await page.isVisible('#done-btn');
  expect(doneBtn).toBe(true);

  await page.fill('#input', 'Coffee');
  await page.fill('#todo-form > div:nth-child(2) > textarea', '1 pound of Red brand');
  await page.fill('#todo-form > div.form-group.d-flex.align-items-center > input', '2021-03-05');

  await page.click('#todo-form > button');
  const taskName = await page.textContent('#box > div > div > div:nth-child(1) > p');
  const taskDesc = await page.textContent('#box > div > div > div.d-flex.justify-content-between.align-items-baseline > span');
  const taskDate = await page.textContent('#date');

  expect(taskName).toMatch('Coffee');
  expect(taskDesc).toMatch('1 pound of Red brand');
  expect(taskDate).toMatch('2021-03-05');
});

test('explores list of projects', async () => {
  await page.click('#projects');
  const heading = await page.isVisible('#box > h4');
  expect(heading).toBe(true);
  const defaultPrj = await page.isVisible('#box > div > div > p');
  expect(defaultPrj).toBe(true);
  const text = await page.textContent('#box > p');
  expect(text).toMatch('Select a project and start adding your Todo tasks:');

  await page.click('#box > div > div');
  const titleText = await page.textContent('#box > h4');
  expect(titleText).toMatch('Todo List - Default project');
  const subTtl = await page.textContent('#box > h5');
  expect(subTtl).toMatch(/New Task/);
});