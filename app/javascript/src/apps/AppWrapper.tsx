import React from 'react';
import { AccountProvider } from '@/components/providers/AccountProvider';
import { NavBar } from '@/components/nav/NavBar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ErrorBoundary } from '@/components/errorBoundary/ErrorBoundary';
import { useWindowFlipper } from '@/hooks/useWindow';
import { OfflineApp } from '@/components/fallbacks/OfflineApp';
import { Footer } from '@/components/footer/Footer';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const isOnline = useWindowFlipper('app_online');

  return (
    <ErrorBoundary>
      <AccountProvider />
      <ThemeProvider showThemeToggler />
      <div className='h-[calc(100dvh)] flex flex-col' id='layout-main'>
        <NavBar />
        <main className='flex-1'>
          <div className='flex flex-row h-full'>
            <div className='w-full'>
              {isOnline ? <>{children}</> : <OfflineApp />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
