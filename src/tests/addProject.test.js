import 'jest-localstorage-mock';
import addProject from '../components/projects/addProject';

test('add project successfully', () => {
  const project = addProject('any project');
  expect(project).toMatch(/project/);
});
