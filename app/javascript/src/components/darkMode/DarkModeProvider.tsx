import { useAppSelector } from '@/store/store';
import { useEffect } from 'react';

export const DarkModeProvider = () => {
  const darkMode = useAppSelector((state) => state.ui.isDarkMode);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  return null;
};
