import React from 'react';
import { screen } from '@testing-library/react';
import { ufRender } from '../testUtils';
import { Sidebar } from '@/components/sidebar/Sidebar';

describe('SideBar', () => {
  it('renders correctly', () => {
    ufRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('role-switcher')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-nav')).toBeInTheDocument();
    expect(screen.getByTestId('log-out-button')).toBeInTheDocument();
  });
});
