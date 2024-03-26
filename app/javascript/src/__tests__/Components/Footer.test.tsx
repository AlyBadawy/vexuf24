import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { Footer } from '@/components/footer/Footer';
import { ufRender } from '../testUtils';
import userEvent from '@testing-library/user-event';
import { Roles } from '@/types/Role';

describe('Footer', () => {
  it('renders main elements', () => {
    ufRender(<Footer />);

    expect(screen.getByText('© 2024 VexUF.com')).toBeInTheDocument();
  });

  it('renders user name and role when there is an account', () => {
    ufRender(
      <Footer />,
      {},
      {
        account: {
          current: {
            firstName: 'Test',
            lastName: ' User',
            roles: [
              {
                id: '1',
                name: Roles.Admin,
                position: 1,
              },
            ],
          },
        },
      }
    );

    expect(screen.getByText(/Test User \[Roles: Admin\]/)).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('renders Login button and simulates click event when not logged in', async () => {
    ufRender(<Footer />, {}, { account: { current: undefined } });
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
      writable: true,
    });

    await userEvent.click(loginButton);
    await waitFor(() => {
      expect(window.location.href).toBe('/accounts/sign_in');
    });
  });
});
