import { useWindowToasty } from '@/hooks/useWindow';
import { useAppSelector } from '@/store/store';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const ToastyProvider = () => {
  const theme = useAppSelector((state) =>
    state.ui.isDarkMode ? 'dark' : 'light'
  );
  const windowToasty = useWindowToasty();

  useEffect(() => {
    if (windowToasty.ALERT) {
      toast.error(windowToasty.ALERT);
    }
    if (windowToasty.NOTICE) {
      toast.success(windowToasty.NOTICE);
    }
  }, [windowToasty]);

  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      limit={4}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme={theme}
    />
  );
};
