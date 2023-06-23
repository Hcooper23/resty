import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the header with the correct title', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { name: /resty/i });

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('RESTy');
  });
});
