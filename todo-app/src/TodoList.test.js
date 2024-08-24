import { render, fireEvent, getAllByText } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  const { getByText } = render(<TodoList />);
  const heading = getByText(/Todo List/);
  expect(heading).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
}) 

it('removes a todo when the x is clicked', () => {   
    const { getByText, getByLabelText } = render(<TodoList />)
    
    // Submit the form to create a new todo
    const taskInput = getByLabelText(/Task/);
    fireEvent.change(taskInput, {target: {value: "Clean my room"}});
    const formButton = getByText('Add a new todo');
    fireEvent.click(formButton);

    const removeButton = getByText('X');
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})

it('is able to create a todo using the form', () => {
    const { getByText, getByLabelText, getAllByText} = render(<TodoList />)
    
    // Submit the form to create a new todo
    const taskInput = getByLabelText(/Task/);
    fireEvent.change(taskInput, {target: {value: "Clean my room"}});
    const button = getByText('Add a new todo');
    fireEvent.click(button);

    // Check that the new todo has been created
    const todos = getAllByText('X');
    expect(todos.length).toBe(1);
})
