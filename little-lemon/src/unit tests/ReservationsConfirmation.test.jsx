import { render, screen } from '@testing-library/react';
import { ReservationConfirmation } from '../pages/ReservationConfirmation';
import { BrowserRouter } from 'react-router-dom'; 

test('renders the ReservationConfirmation component', () => {
  render(
    <BrowserRouter> 
      <ReservationConfirmation />
    </BrowserRouter>
  );

  const confirmationText = screen.getByText(/Reservation Confirmed/i);
  expect(confirmationText).toBeInTheDocument();

  const homeLink = screen.getByText(/Go Back Home/i);
  expect(homeLink).toBeInTheDocument();
});
