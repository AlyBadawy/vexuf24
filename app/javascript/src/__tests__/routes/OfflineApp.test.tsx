import React from 'react';
import { screen } from '@testing-library/react';
import { ufRender } from '../testUtils';
import { OfflineApp } from '@/components/fallbacks/OfflineApp';

describe('OfflineApp', () => {
  it('renders main elements', () => {
    ufRender(<OfflineApp />);

    expect(screen.getByText('Vexuf is offline!')).toBeInTheDocument();
    expect(screen.getByText(/support@vexuf.com/)).toBeInTheDocument();
    expect(
      screen.getByText(/Vexuf is currently offline for maintenance/)
    ).toBeInTheDocument();
  });
});
