// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';

// describe('App', () => {
//   test('renders the App component and interacts with the form', () => {
//     render(<App />);
    
//     // Assert that the header component is rendered
//    expect(screen.getByRole('heading', { name: /resty/i })).toBeInTheDocument();

//     // Assert that the initial request method and URL are not displayed
//     expect(screen.queryByText('Request Method:')).toBeNull();
//     expect(screen.queryByText('URL:')).toBeNull();

//     // Simulate user interaction with the form
//     userEvent.type(screen.getByLabelText('Request Method'), 'GET');
//     userEvent.type(screen.getByLabelText('URL'), 'https://api.example.com/data');
//     userEvent.click(screen.getByText('Submit'));

//     // Assert that the request method and URL are updated with user input
//     expect(screen.getByText('Request Method: GET')).toBeInTheDocument();
//     expect(screen.getByText('URL: https://api.example.com/data')).toBeInTheDocument();

//     // Assert that the results component is rendered
//     expect(screen.getByText('Results')).toBeInTheDocument();
    
//     // Assert that the fake data is rendered in the results
//     expect(screen.getByText('fake thing 1')).toBeInTheDocument();
//     expect(screen.getByText('fake thing 2')).toBeInTheDocument();

//     // Assert that the footer component is rendered
//     expect(screen.getByText('Footer')).toBeInTheDocument();
//   });
// });
