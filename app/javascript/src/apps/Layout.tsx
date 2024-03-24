import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { RightSide } from '@/components/rightSide/RightSide';
import { Sidebar } from '@/components/sidebar/Sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useLayout } from '@/hooks/useLayout';
import { cn } from '@/lib/shadcn-utils';
import { useAppDispatch } from '@/store/store';
import { setLayOut } from '@/store/uiSlice';
import { LayoutSize } from '@/types/Layout';
import { debounce } from 'lodash';

type AppWrapperProps = {
  children?: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const dispatch = useAppDispatch();

  const layOut = useLayout();

  const debouncedOnLayout = debounce((sizes: number[]) => {
    dispatch(setLayOut(sizes as LayoutSize));
  }, 300);

  if (!layOut) {
    return null;
  }

  return (
    <main data-testid='online-app-layout'>
      <ResizablePanelGroup
        direction='horizontal'
        onLayout={debouncedOnLayout}
        className='h-full items-stretch'
      >
        <ResizablePanel
          defaultSize={layOut.sizes[0]}
          collapsedSize={3}
          collapsible={true}
          minSize={10}
          maxSize={30}
          className={cn(
            layOut.sideBarCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out'
          )}
        >
          {<Sidebar />}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={layOut.sizes[1]}>
          {children}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={layOut.sizes[2]} minSize={20} maxSize={45}>
          {<RightSide />}
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export const AppOutlet = () => {
  return (
    <>
      <div className='h-screen flex flex-col' id='layout-main'>
        <NavBar />
        <main className='flex-1'>
          <div className='flex flex-row h-full'>
            <div className='w-full'>
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
