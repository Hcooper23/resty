import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  test('renders data in the output area upon form submission', () => {
    // Mock function to pass as the handleApiCall prop
    const handleApiCallMock = jest.fn();

    // Render the Form component with the mock function
    render(<Form handleApiCall={handleApiCallMock} />);

    // Find the input elements and the submit button
    const urlInput = screen.getByLabelText(/URL/);
    const submitButton = screen.getByRole('button', { name: /GO!/ });

    // Set the input value and select a method
    fireEvent.change(urlInput, { target: { value: 'https://example.com' } });
    fireEvent.click(screen.getByText('POST'));

    // Trigger form submission
    fireEvent.click(submitButton);

    // Verify that the handleApiCallMock function was called with the correct form data
    expect(handleApiCallMock).toHaveBeenCalledTimes(1);
    expect(handleApiCallMock).toHaveBeenCalledWith({
      method: 'POST',
      url: 'https://example.com',
    });
  });
});
