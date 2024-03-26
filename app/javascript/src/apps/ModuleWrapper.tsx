import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React, { ReactNode } from 'react';

export const ModuleWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center px-4 py-2'>
      <ScrollArea className='w-full h-[calc(100dvh-115px)] rounded-md p-4 pr-10 bg-primary/5'>
        {children}
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    </div>
  );
};
