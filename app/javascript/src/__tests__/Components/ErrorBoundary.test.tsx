// ErrorBoundary.test.tsx
import React from 'react';
import { screen } from '@testing-library/react';
import { ErrorBoundary } from '../../components/errorBoundary/ErrorBoundary';
import { ufRender } from '@/__tests__/testUtils';

// This is a dummy child component that will throw an error
const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
  return <div>Should not render this</div>;
};

describe('ErrorBoundary', () => {
  it('catches error and renders error fallback', () => {
    ufRender(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    const errorFallback = screen.getByText(/Error thrown from problem child/i);
    expect(errorFallback).toBeInTheDocument();
  });
});
