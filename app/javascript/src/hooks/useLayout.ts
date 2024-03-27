import { useAppSelector } from '@/store/store';
import { LayOut } from '@/types/Layout';
import { isEqual } from 'lodash';

export const useLayout = () => {
  return useAppSelector(
    (state) => {
      const layout = state.ui.layout;
      if (layout === LayOut.DEFAULT) {
        return state.ui.layOutSizes[1] < state.ui.layOutSizes[2]
          ? LayOut.SUMMARY_LEFT
          : LayOut.SUMMARY_RIGHT;
      }

      return layout;
    },
    (a, b) => a === b
  );
};
export const useLayoutSizes = (panel: number) => {
  return useAppSelector(
    (state) => state.ui.layOutSizes[panel],
    (a, b) => isEqual(a, b)
  );
};

export const useSideBarCollapsed = () => {
  return useAppSelector(
    (state) => state.ui.layOutSizes[0] === 3,
    (a, b) => a === b
  );
};
