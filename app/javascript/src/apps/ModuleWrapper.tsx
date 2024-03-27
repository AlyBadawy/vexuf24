import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React, { ReactNode } from 'react';

export const ModuleWrapper = ({
  heightClass,
  children,
}: {
  heightClass: string;
  children: ReactNode;
}) => {
  return (
    <ScrollArea
      className={`w-full rounded-md p-4 pr-10 bg-primary/5 ${heightClass}`}
    >
      {children}
      <ScrollBar orientation='vertical' />
    </ScrollArea>
  );
};
