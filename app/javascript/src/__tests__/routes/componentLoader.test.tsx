// ComponentLoader.test.tsx
import React, { lazy } from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { ComponentLoader } from '../../routes/ComponentLoader';
import { ufRender } from '@/__tests__/testUtils';

// This is a dummy child component that will be lazy loaded
const LazyComponent = lazy(() => import('./LazyComponent'));

describe('ComponentLoader', () => {
  it('renders Loading component while waiting for lazy component', async () => {
    ufRender(<ComponentLoader component={<LazyComponent />} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

    expect(screen.getByText('Lazy Component')).toBeInTheDocument();
  });
});
