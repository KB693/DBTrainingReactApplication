// test.js
import React from 'react';
import { render } from '@testing-library/react';
import TODOHero from './todohero';

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5} total_todos={10} />);
  
  expect(getByText(/Task Done/i)).toBeInTheDocument();
  expect(getByText(/Keep it Up/i)).toBeInTheDocument();
  expect(getByText(/5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={0} total_todos={10} />);
  
  expect(getByText(/0\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={10} total_todos={10} />);
  
  expect(getByText(/10\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={15} total_todos={10} />);
  
  expect(getByText(/15\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={-5} total_todos={10} />);
  
  expect(getByText(/-5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5} total_todos={-10} />);
  
  expect(getByText(/5\/-10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={-5} total_todos={-10} />);
  
  expect(getByText(/-5\/-10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={"5"} total_todos={10} />);
  
  expect(getByText(/5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5} total_todos={"10"} />);
  
  expect(getByText(/5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={"5"} total_todos={"10"} />);
  
  expect(getByText(/5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5.5} total_todos={10} />);
  
  expect(getByText(/5.5\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5} total_todos={10.5} />);
  
  expect(getByText(/5\/10.5/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5.5} total_todos={10.5} />);
  
  expect(getByText(/5.5\/10.5/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={NaN} total_todos={10} />);
  
  expect(getByText(/NaN\/10/i)).toBeInTheDocument();
});

test('', () => {
  const { getByText } = render(<TODOHero todos_completed={5} total_todos={NaN} />);
  
  expect(getByText(/5\/NaN/i)).toBeInTheDocument();
});
