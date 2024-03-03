import React from 'react';
import { ErrorFallback } from './ErrorFallback';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback error={this.state.error} /> || (
          <div>Something went wrong.</div>
        )
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
