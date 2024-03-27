import { uiSlice } from '@/store/uiSlice';
import { LayOut, LayoutSize, UIState } from '@/types/Layout';
import { Modules } from '@/types/Modules';

describe('uiSlice', () => {
  let initialState: UIState;

  beforeEach(() => {
    initialState = {
      isDarkMode: true,
      currentModule: Modules.Dashboard,
      layOutSizes: [3, 72, 25],
      layout: LayOut.DEFAULT,
    };
  });

  it('should handle setDarkMode', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setDarkMode(false)
    );
    expect(actual.isDarkMode).toBe(false);
  });

  it('should handle setLayOut', () => {
    const newLayout: LayoutSize = [1, 2, 3];
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setLayOutSizes(newLayout)
    );
    expect(actual.layOutSizes).toEqual(newLayout);
  });

  it('should handle setCurrentModule', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setCurrentModule(Modules.Test)
    );
    expect(actual.currentModule).toBe('Test');
  });
});
