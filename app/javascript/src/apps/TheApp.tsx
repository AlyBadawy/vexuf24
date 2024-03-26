import React from 'react';

import { debounce } from 'lodash';
import { useLayoutSizes, useSideBarCollapsed } from '@/hooks/useLayout';
import { cn } from '@/lib/shadcn-utils';
import { RightSide } from '@/apps/RightSide';
import { LeftSide } from '@/apps/LeftSide';
import { NoAccount } from './NoAccount';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setLayOutSizes } from '@/store/uiSlice';
import { Sidebar } from '@/components/sidebar/Sidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { LayoutSize } from '@/types/Layout';

export const TheApp = () => {
  const dispatch = useAppDispatch();
  const sidebarSize = useLayoutSizes(0);
  const summaryPanelSize = useLayoutSizes(1);
  const detailPanelSize = useLayoutSizes(2);
  const sideBarCollapsed = useSideBarCollapsed();

  const account = useAppSelector((state) => state.account.current);

  const sideBarClassName = cn(
    sideBarCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out'
  );

  const debouncedOnLayout = debounce((sizes: number[]) => {
    dispatch(setLayOutSizes(sizes as LayoutSize));
  }, 300);

  if (!account) {
    return <NoAccount />;
  }

  return (
    <ResizablePanelGroup
      data-testid='online-app-layout'
      direction='horizontal'
      onLayout={debouncedOnLayout}
      className='h-full items-stretch'
    >
      <ResizablePanel
        defaultSize={sidebarSize}
        collapsedSize={3}
        collapsible={true}
        minSize={8}
        maxSize={15}
        className={sideBarClassName}
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={summaryPanelSize}>
        <LeftSide />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={detailPanelSize} minSize={20} maxSize={60}>
        <RightSide />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
