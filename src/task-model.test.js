import Task from './task-model';

test('returns an object', () => {
  const newTask = new Task('Mau', 'desc', '11-11-21', 'high', false);
  expect(newTask.name).toBe('Mau');
  expect(newTask.description).toBe('desc');
  expect(newTask.date).toBe('11-11-21');
  expect(newTask.priority).toBe('high');
  expect(newTask.status).toBe(false);
});
