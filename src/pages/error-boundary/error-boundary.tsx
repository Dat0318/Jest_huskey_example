/* ERROR BOUNDARY COMPONENT */

import React from 'react';
import { Component, ReactNode } from 'react';
// @ts-ignore
import Styled from './error-boundary.style.ts';

interface IErrorBoundaryProps {
  onReset: () => void;
  children: ReactNode | null;
}

interface IErrorBoundaryState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <Styled.Container>
          <Styled.Content>
            <Styled.Title>Warning!</Styled.Title>
            <Styled.Description>Something went wrong. try again in the below!</Styled.Description>
            <button onClick={this.props.onReset} style={{ border: '1px solid #d3d3d3' }}>
              Reload
            </button>
          </Styled.Content>
        </Styled.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
