import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Results from '../Results';

describe('Results Component', () => {
  test('renders loading message when loading prop is true', () => {
    render(<Results loading={true} />);

    const loadingMessage = screen.getByText('Loading.....');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders JSON data when data prop is provided', () => {
    const data = {
      count: 10,
      pagination: { page: 1, total: 20 },
      results: ['item1', 'item2', 'item3'],
    };

    render(<Results data={data} loading={false} />);

    const jsonViewer = screen.getByRole('textbox');
    expect(jsonViewer).toBeInTheDocument();
    expect(jsonViewer).toHaveTextContent(JSON.stringify(data, null, 2));
  });

  test('does not render anything when data prop is not provided', () => {
    render(<Results loading={false} />);
    const jsonViewer = screen.queryByRole('textbox');
    expect(jsonViewer).not.toBeInTheDocument();
  });
});
