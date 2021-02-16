import Todo from '../components/todos/todo';

test('create task successfully', () => {
  const todo = new Todo(
    'one task',
    'any description',
    '2021-02-15',
    1,
  );
  expect(todo).toEqual({
    _title: 'one task',
    _description: 'any description',
    _dueDate: '2021-02-15',
    _priority: 1,
  });
});
