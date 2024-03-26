import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ModulePicker } from '@/components/modules/ModulePicker';
import { ModuleSummary } from '@/components/modules/ModuleSummary';
import { useLayout } from '@/hooks/useLayout';
import { LayOut } from '@/types/Layout';
import { ModuleDetails } from '@/components/modules/ModuleDetails';

export const LeftSide = () => {
  const layout = useLayout();

  return (
    <div className='h-full flex flex-col px-4 py-2 justify-between'>
      <ScrollArea className='w-full h-[calc((100dvh-130px)/4)] rounded-md p-4 bg-primary/5'>
        <ModulePicker />
        <ScrollBar orientation='vertical' />
      </ScrollArea>
      <Separator className='my-2' />
      <ScrollArea className='w-full h-[calc((100dvh-130px)/4*3)] rounded-md p-4 bg-primary/5'>
        {layout === LayOut.SUMMARY_LEFT ? <ModuleSummary /> : <ModuleDetails />}
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    </div>
  );
};
