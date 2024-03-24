import { renderHook } from '@testing-library/react';
import {
  useWindowFlipper,
  useWindowGitRevision,
  useWindowRailsEnv,
  useWindowToasty,
} from '@/hooks/useWindow';

describe('useWindow', () => {
  it('useWindowFlipper returns the correct feature flag', () => {
    window.FLIPPERS = { testFeature: true };
    const { result } = renderHook(() => useWindowFlipper('testFeature'));
    expect(result.current).toBe(true);
  });

  it('useWindowGitRevision returns the correct git revision', () => {
    const mockGitRevision = {
      message: 'test',
      tag: 'v1.0',
      revision: 'abcd1234',
    };
    window.GIT_REVISION = mockGitRevision;
    const { result } = renderHook(() => useWindowGitRevision());
    expect(result.current).toEqual(mockGitRevision);
  });

  it('useWindowRailsEnv returns the correct Rails environment', () => {
    window.RAILS_ENV = 'production';
    const { result } = renderHook(() => useWindowRailsEnv());
    expect(result.current).toBe('production');
  });

  it('useWindowToasty returns the correct toasty object', () => {
    const mockToasty = { NOTICE: 'Test notice', ALERT: 'Test alert' };
    window.TOASTY = mockToasty;
    const { result } = renderHook(() => useWindowToasty());
    expect(result.current).toEqual(mockToasty);
  });
});
