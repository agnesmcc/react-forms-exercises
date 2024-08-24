import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  const { getByText } = render(<NewTodoForm />);
  const input = getByText(/Task/);
  expect(input).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
}) 
