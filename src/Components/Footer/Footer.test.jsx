import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders the footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('test-footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('displays the correct copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/Hayden Cooper 2023/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
