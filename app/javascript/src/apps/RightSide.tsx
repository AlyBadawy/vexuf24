import React from 'react';
import { ModuleDetails } from '@/components/modules/ModuleDetails';
import { ModuleSummary } from '@/components/modules/ModuleSummary';
import { LayOut } from '@/types/Layout';
import { useLayout } from '@/hooks/useLayout';
import { ModuleWrapper } from './ModuleWrapper';

export const RightSide = () => {
  const layout = useLayout();
  return (
    <div className='flex items-center pl-4 pr-2 py-2'>
      <ModuleWrapper heightClass='h-[calc(100dvh-115px)]'>
        {layout === LayOut.SUMMARY_LEFT ? <ModuleDetails /> : <ModuleSummary />}
      </ModuleWrapper>
    </div>
  );
};
