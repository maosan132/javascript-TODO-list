import { addProject } from './controller';

describe('Deals with creating a project', () => {
  const names = addProject('go shopping');
  test('creates a project with a specified name', () => {
    expect(names.prjName).toBe('go shopping');
  });

  test('myProjects array has an item with this project\'s name', () => {
    expect(names.myPrjs).toBe('go shopping');
  });
});