import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ModuleDetails } from '@/components/modules/ModuleDetails';
import { ModuleSummary } from '@/components/modules/ModuleSummary';
import { LayOut } from '@/types/Layout';
import { useLayout } from '@/hooks/useLayout';

export const RightSide = () => {
  const layout = useLayout();
  return (
    <div className='flex items-center pl-4 pr-2 py-2'>
      <ScrollArea className='w-full h-[calc(100dvh-115px)] rounded-md p-4 pr-10 bg-primary/5'>
        {layout === LayOut.SUMMARY_LEFT ? <ModuleDetails /> : <ModuleSummary />}
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    </div>
  );
};
