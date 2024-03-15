import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Sidebar } from '@/components/sidebar/Sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/shadcn-utils';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setLayOutSizes, setSideBarCollapsed } from '@/store/uiSlice';
import { debounce } from 'lodash';

type AppWrapperProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const AppWrapper = ({ left, right }: AppWrapperProps) => {
  const layOutSizes = useAppSelector((state) => state.ui.layOutSizes);

  return (
    <>
      <ResizablePanel defaultSize={layOutSizes[1]} minSize={30}>
        {left ?? <></>}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={layOutSizes[2]}>
        {right ?? <></>}
      </ResizablePanel>
    </>
  );
};

export const AppLayout = () => {
  const dispatch = useAppDispatch();

  const isSideBarCollapsed = useAppSelector(
    (state) => state.ui.isSideBarCollapsed
  );
  const layOutSizes = useAppSelector((state) => state.ui.layOutSizes);

  const debouncedOnLayout = debounce((sizes: number[]) => {
    dispatch(setLayOutSizes(sizes));
  }, 2000);

  return (
    <ResizablePanelGroup
      direction='horizontal'
      onLayout={debouncedOnLayout}
      className='h-full items-stretch'
    >
      <ResizablePanel
        defaultSize={layOutSizes[0]}
        collapsedSize={3}
        collapsible={true}
        minSize={10}
        maxSize={20}
        onCollapse={() => dispatch(setSideBarCollapsed(true))}
        onExpand={() => dispatch(setSideBarCollapsed(false))}
        className={cn(
          isSideBarCollapsed &&
            'min-w-[50px] transition-all duration-300 ease-in-out'
        )}
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <Outlet />
    </ResizablePanelGroup>
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
