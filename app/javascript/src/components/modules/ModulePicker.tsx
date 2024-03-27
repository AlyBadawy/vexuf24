import React from 'react';
import { UfIcon } from '../ui/ufIcon';
import {
  PiCalendarDuotone,
  PiCalendarPlusDuotone,
  PiCreditCardDuotone,
  PiCurrencyDollarDuotone,
  PiEnvelopeOpenDuotone,
  PiFolderUserDuotone,
  PiHandHeartDuotone,
  PiTreeStructureDuotone,
  PiUserPlusDuotone,
  PiUsersDuotone,
  PiPaperPlaneTiltDuotone,
  PiTestTubeDuotone,
  PiNotificationDuotone,
  PiStethoscopeDuotone,
  PiSquaresFourDuotone,
} from 'react-icons/pi';

export const ModulePicker = () => {
  return (
    <div className='flex flex-wrap gap-1 justify-center flex-grow overflow-auto min-h-0 mx-1 text-indigo-600 dark:text-indigo-400'>
      <UfIcon title='Dashboard' icon={<PiSquaresFourDuotone />} />
      <UfIcon title='Accounts' icon={<PiUsersDuotone />} />
      <UfIcon title='New Account' icon={<PiUserPlusDuotone />} />
      <UfIcon title='Topics' icon={<PiTreeStructureDuotone />} />
      <UfIcon title='Notes' icon={<PiFolderUserDuotone />} />
      <UfIcon title='Care' icon={<PiStethoscopeDuotone />} notify />
      <UfIcon title='After Care' icon={<PiHandHeartDuotone />} />
      <UfIcon title='Revenue' icon={<PiCurrencyDollarDuotone />} />
      <UfIcon title='Billing' icon={<PiCreditCardDuotone />} />
      <UfIcon title='Schedule' icon={<PiCalendarDuotone />} />
      <UfIcon title='New Event' icon={<PiCalendarPlusDuotone />} />
      <UfIcon title='Inbox' icon={<PiEnvelopeOpenDuotone />} notify />
      <UfIcon title='Send' icon={<PiPaperPlaneTiltDuotone />} />
      <UfIcon title='Labs' icon={<PiTestTubeDuotone />} notify />
      <UfIcon title='Notifications' icon={<PiNotificationDuotone />} />
      <UfIcon title='Revenue' icon={<PiCurrencyDollarDuotone />} />
      <UfIcon title='Billing' icon={<PiCreditCardDuotone />} />
      <UfIcon title='Schedule' icon={<PiCalendarDuotone />} />
      <UfIcon title='New Event' icon={<PiCalendarPlusDuotone />} />
    </div>
  );
};
