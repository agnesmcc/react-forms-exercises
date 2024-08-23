import { render } from '@testing-library/react';
import Box from './Box';

const BOX = (
    <div data-testid="test-box">
    <Box
        id={1}
        width={100}
        height={100}
        color="red"
    />
    </div>
)
    

it('renders without crashing', () => {
  const { getByTestId } = render(BOX);
  const box = getByTestId('test-box');
  const child = box.firstChild;
  expect(child).toHaveStyle('background-color: red');
})

it('matches the snapshot', () => {
  const { asFragment } = render(BOX);
  expect(asFragment()).toMatchSnapshot();
}) 
