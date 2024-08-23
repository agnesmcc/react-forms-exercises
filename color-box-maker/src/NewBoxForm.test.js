import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
  const { getByText } = render(<NewBoxForm />);
  const input = getByText(/Width/);
  expect(input).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
}) 
