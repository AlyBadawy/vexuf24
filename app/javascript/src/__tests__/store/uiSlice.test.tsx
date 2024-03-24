import { Roles } from '@/types/Role';
import { LayoutSize } from '@/types/Layout';
import { UIState, uiSlice } from '@/store/uiSlice';

describe('uiSlice', () => {
  let initialState: UIState;

  beforeEach(() => {
    initialState = {
      isDarkMode: true,
      currentRole: undefined,
      currentModule: 'dashboard',
      layOut: {
        [Roles.Admin]: [3, 72, 25],
        [Roles.Therapist]: [3, 72, 25],
        [Roles.Patient]: [3, 72, 25],
      },
    };
  });

  it('should handle setDarkMode', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setDarkMode(false)
    );
    expect(actual.isDarkMode).toBe(false);
  });

  it('should handle setCurrentRole', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setCurrentRole(Roles.Admin)
    );
    expect(actual.currentRole).toEqual(Roles.Admin);
  });

  it('should handle unSetCurrentRole', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.unSetCurrentRole()
    );
    expect(actual.currentRole).toBeUndefined();
  });

  it('should handle setLayOut', () => {
    initialState.currentRole = Roles.Admin;
    const newLayout: LayoutSize = [1, 2, 3];
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setLayOut(newLayout)
    );
    expect(actual.layOut[Roles.Admin]).toEqual(newLayout);
  });

  it('should not change layout if currentRole is undefined', () => {
    const newLayout: LayoutSize = [1, 2, 3];
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setLayOut(newLayout)
    );
    expect(actual.layOut[Roles.Admin]).not.toEqual(newLayout);
  });

  it('should handle setCurrentModule', () => {
    const actual = uiSlice.reducer(
      initialState,
      uiSlice.actions.setCurrentModule('newModule')
    );
    expect(actual.currentModule).toBe('newModule');
  });
});
