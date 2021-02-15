import Project from '../components/projects/project';

test('create project successfully', () => {
  const project = new Project('one project');
  expect(project._title).toBe('one project');
});
