import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DarkModeProvider } from '../../components/darkMode/DarkModeProvider';
import { ufRender } from '@/__tests__/testUtils';
import { DarkModeToggler } from '../../components/darkMode/DarkModeToggler';
import * as uiSlice from '@/store/uiSlice';

describe('DarkMode', () => {
  describe('DarkModeProvider', () => {
    it('renders without crashing', () => {
      ufRender(<DarkModeProvider />);
      const provider = screen.queryByTestId('dark-mode-provider');
      expect(provider).not.toBeInTheDocument();
    });
  });

  describe('DarkModeToggler', () => {
    it('renders without crashing', () => {
      ufRender(<DarkModeToggler />);
      const provider = screen.queryByTestId('dark-mode-toggler');
      expect(provider).toBeInTheDocument();
    });

    it('toggles the dark mode', async () => {
      const darkModeSpy = jest.spyOn(uiSlice, 'setDarkMode');
      ufRender(<DarkModeToggler />);
      const toggler = screen.queryByTestId('dark-mode-toggler');
      await userEvent.click(toggler!);
      expect(darkModeSpy).toHaveBeenCalledWith(false);
      await userEvent.click(toggler!);
      expect(darkModeSpy).toHaveBeenCalledWith(true);
    });
  });
});
