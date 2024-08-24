import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Todo List/);
  expect(heading).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
}) 

