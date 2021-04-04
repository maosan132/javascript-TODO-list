import { Project } from './project-model';

test('it returns a Project object', () => {
  const newProject = new Project('go shop', []);
  expect(newProject.name).toBe('go shop');
  expect(newProject.taskList).toStrictEqual([]);
});
