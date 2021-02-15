import Project from '../components/projects/project';
import 'jest-localstorage-mock';
import addProject from '../components/projects/addProject';
import showProject from '../components/projects/showProject';

test('show project successfully', () => {
  const project = addProject('one project');
  const projectToShow = showProject(project);
  expect(projectToShow._title).toBe('one project');
});
