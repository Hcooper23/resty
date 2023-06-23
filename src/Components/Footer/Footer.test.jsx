import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders the footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('test-footer');
    expect(footerElement).toBeInTheDocument();
  });
});
