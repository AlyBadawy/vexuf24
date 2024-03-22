import { useAppSelector } from '@/store/store';
import { isEqual } from 'lodash';

export const useLayout = () => {
  return useAppSelector(
    (state) => {
      if (state.ui.currentRole === undefined) return undefined;
      return {
        sizes: state.ui.layOut[state.ui.currentRole],
        sideBarCollapsed: state.ui.layOut[state.ui.currentRole][0] === 3,
      };
    },
    (a, b) => isEqual(a, b)
  );
};
