import { render } from '@testing-library/react';
import Todo from './Todo';

const TODO = <Todo id={1} task="Clean my room" />

it('renders without crashing', () => {
  const { getByText } = render(TODO);
  const task = getByText(/Clean my room/);
  expect(task).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(TODO);
  expect(asFragment()).toMatchSnapshot();
}) 
