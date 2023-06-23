import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from '../Results';

describe('Results Component', () => {
  test('renders loading message when loading prop is true', () => {
    render(<Results loading={true} />);

    const loadingMessage = screen.getByText('Loading.....');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('does not render anything when data prop is not provided', () => {
    render(<Results loading={false} />);
    const jsonViewer = screen.queryByRole('textbox', { hidden: true });
    expect(jsonViewer).not.toBeInTheDocument();
  });
});
