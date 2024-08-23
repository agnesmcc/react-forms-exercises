import { render, fireEvent, getAllByText } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  const { getByText } = render(<BoxList />);
  const heading = getByText(/Box List/);
  expect(heading).toBeInTheDocument();
})

it('matches the snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
}) 

it('removes a box when the x is clicked', () => {   
    const { getByText } = render(<BoxList />)
    const button = getByText('X');
    fireEvent.click(button);
    expect(button).not.toBeInTheDocument();
})

it('is able to create a box using the form', () => {
    const { getByText, getByLabelText, getAllByText} = render(<BoxList />)
    
    // Submit the form to create a new box
    const widthInput = getByLabelText(/Width/);
    fireEvent.change(widthInput, {target: {value: 100}});
    const heightInput = getByLabelText(/Height/);
    fireEvent.change(heightInput, {target: {value: 100}});
    const colorInput = getByLabelText(/Color/);
    fireEvent.change(colorInput, {target: {value: 'blue'}});
    const button = getByText('Add a new box');
    fireEvent.click(button);

    // Check that the new box has been created
    const boxes = getAllByText('X');
    expect(boxes.length).toBe(2);
})
