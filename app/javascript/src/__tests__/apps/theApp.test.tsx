import { TheApp } from '@/apps/TheApp';
import { screen } from '@testing-library/react';
import React from 'react';
import { ufRender } from '../testUtils';
import { LayOut } from '@/types/Layout';
import { Modules } from '@/types/Modules';

describe('TheApp', () => {
  it('renders NoAccount if no account', () => {
    ufRender(<TheApp />, {}, { account: { current: undefined } });

    expect(
      screen.getByText('You do not have enough privileges to view this!')
    ).toBeInTheDocument();
  });

  it('renders ResizablePanelGroup if account exist', () => {
    ufRender(
      <TheApp />,
      {},
      {
        account: { current: { id: '1', firstName: 'Test', lastName: 'User' } },
        ui: {
          layOutSizes: [20, 30, 50],
          isDarkMode: false,
          layout: LayOut.DEFAULT,
          currentModule: Modules.Dashboard,
        },
      }
    );

    expect(screen.getByTestId('online-app-layout')).toBeInTheDocument();
  });
});
