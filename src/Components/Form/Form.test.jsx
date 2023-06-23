import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form Component', () => {
  test('submits the form with the entered URL and method', () => {
    const handleApiCallMock = jest.fn();
    render(<Form handleApiCall={handleApiCallMock} />);
    const urlInput = screen.getByLabelText('URL:');
    const submitButton = screen.getByRole('button', { name: 'GO!' });

    fireEvent.change(urlInput, { target: { value: 'https://api.example.com' } });
    fireEvent.click(submitButton);

    expect(handleApiCallMock).toHaveBeenCalledTimes(1);
    expect(handleApiCallMock).toHaveBeenCalledWith({
      method: 'get',
      url: 'https://api.example.com',
    });
  });

  test('updates the URL state on input change', () => {
    render(<Form handleApiCall={jest.fn()} />);
    const urlInput = screen.getByLabelText('URL:');

    fireEvent.change(urlInput, { target: { value: 'https://api.example.com' } });

    expect(urlInput).toHaveValue('https://api.example.com');
  });

  test('updates the method state on method selection', () => {
    render(<Form handleApiCall={jest.fn()} />);
    const postMethod = screen.getByText('POST');

    fireEvent.click(postMethod);

    expect(postMethod).toHaveClass('active');
  });
});
