import Todo from '../components/todos/todo';

test('create task successfully', () => {
  const todo = new Project(
    'one task',
    'any description',
    '2021-02-15',
    1
  );
  expect(todo._title).toEqual({
    _title: 'one task',
    _description: 'any description',
    _dueDate: '2021-02-15',
    _priority: 1
  });
});
