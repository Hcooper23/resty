import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('allows form input and renders expected results', () => {
    render(<App />);
    const urlInput = screen.getByTestId('test-url-input');
    const goButton = screen.getByTestId('test-button');

    fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } });
    fireEvent.click(goButton);

    const resultsBefore = screen.getByTestId('test-results');
    expect(resultsBefore).toHaveTextContent('LOADING...');
  });
});
