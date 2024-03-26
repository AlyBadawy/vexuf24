import React from 'react';
import { screen } from '@testing-library/react';
import { ufRender } from '../testUtils';
import { NotFound } from '@/components/fallbacks/NotFound';

describe('NotFound', () => {
  it('renders main elements', () => {
    ufRender(<NotFound />);

    expect(screen.getByText(/Error: 404/)).toBeInTheDocument();
    expect(screen.getByText(/support@vexuf.com/)).toBeInTheDocument();
    expect(screen.getByText(/Page not found!/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /We are sorry, but the page you are looking for does not exist or has been moved./
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Return to Homepage/)).toBeInTheDocument();
  });
});
