import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TODOList from './todolist';

const mockSetTodos = jest.fn();

const sampleTodos = [
  { id: 1, title: 'Test Task 1', is_completed: false },
  { id: 2, title: 'Test Task 2', is_completed: true },
];

test('renders TODOList component with tasks', () => {
  const { getByText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);

  expect(getByText('Test Task 1')).toBeInTheDocument();
  expect(getByText('Test Task 2')).toBeInTheDocument();
});

test('renders TODOList component with no tasks', () => {
  const { getByText } = render(<TODOList todos={[]} setTodos={mockSetTodos} />);

  expect(getByText('No tasks in the task list')).toBeInTheDocument();
});

test('renders TODOList component and edit a task', () => {
  const { getByText, getByLabelText, getByRole } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });
  fireEvent.blur(input);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and complete a task', () => {
  const { getByText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);

  const checkbox = getByText('Test Task 1').previousSibling;
  fireEvent.click(checkbox);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Test Task 1', is_completed: true },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and delete a task', () => {
  const { getByText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});


test('renders TODOList component and shows input when editing', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('Test Task 1');
});

test('renders TODOList component and submits edit form', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });

  const form = input.closest('form');
  fireEvent.submit(form);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and checks editing functionality', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });

  fireEvent.blur(input);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and checks handleDelete functionality', () => {
  const { getByText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and checks completeTodo functionality', () => {
  const { getByText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);

  const checkbox = getByText('Test Task 1').previousSibling;
  fireEvent.click(checkbox);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Test Task 1', is_completed: true },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component with empty todos', () => {
  const { getByText } = render(<TODOList todos={[]} setTodos={mockSetTodos} />);

  expect(getByText('No tasks in the task list')).toBeInTheDocument();
});

test('renders TODOList component with null todos', () => {
  const { getByText } = render(<TODOList todos={null} setTodos={mockSetTodos} />);

  expect(getByText('No tasks in the task list')).toBeInTheDocument();
});

test('renders TODOList component and handles editing a task', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });

  fireEvent.blur(input);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and checks handleInputBlur', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });

  fireEvent.blur(input);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});

test('renders TODOList component and checks handleSubmit', () => {
  const { getByText, getByLabelText } = render(<TODOList todos={sampleTodos} setTodos={mockSetTodos} />);
  
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const input = getByLabelText('edit-todo');
  fireEvent.change(input, { target: { value: 'Updated Task 1' } });

  const form = input.closest('form');
  fireEvent.submit(form);

  expect(mockSetTodos).toHaveBeenCalledWith([
    { id: 1, title: 'Updated Task 1', is_completed: false },
    { id: 2, title: 'Test Task 2', is_completed: true },
  ]);
});
