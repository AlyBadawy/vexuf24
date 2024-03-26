import React from 'react';
import { ModuleDetails } from '@/components/modules/ModuleDetails';
import { ModulePicker } from '@/components/modules/ModulePicker';
import { ModuleSummary } from '@/components/modules/ModuleSummary';
import { Separator } from '@/components/ui/separator';
import { useLayout } from '@/hooks/useLayout';
import { LayOut } from '@/types/Layout';
import { ModuleWrapper } from './ModuleWrapper';

export const LeftSide = () => {
  const layout = useLayout();

  return (
    <div className='h-full flex flex-col px-4 py-2 justify-between'>
      <ModuleWrapper heightClass='h-[calc((100dvh-130px)/4)]'>
        <ModulePicker />
      </ModuleWrapper>
      <Separator className='my-2' />
      <ModuleWrapper heightClass='h-[calc((100dvh-130px)/4*3)]'>
        {layout === LayOut.SUMMARY_LEFT ? <ModuleSummary /> : <ModuleDetails />}
      </ModuleWrapper>
    </div>
  );
};
