import React from 'react';
import { screen } from '@testing-library/react';
import { TheApp } from '@/apps/TheApp';
import { ufRenderWithoutRouter } from '../testUtils';
import * as useWindow from '@/hooks/useWindow';

describe.skip('TheApp', () => {
  jest.spyOn(useWindow, 'useWindowToasty').mockReturnValue({});

  it('renders OnlineRouter when app is online', () => {
    ufRenderWithoutRouter(<TheApp />, { app_online: true });

    expect(screen.getByTestId('online-app-layout')).toBeInTheDocument();
    expect(() => screen.getByTestId('offline-app-layout')).toThrow();
  });

  it('renders OfflineRouter when app is offline', () => {
    ufRenderWithoutRouter(<TheApp />, { app_online: false });

    expect(screen.getByTestId('offline-app-layout')).toBeInTheDocument();
    expect(() => screen.getByTestId('online-app-layout')).toThrow();
  });
});
