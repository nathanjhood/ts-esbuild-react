import * as React from 'react';
import { test, expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

const timeout = 10000;

describe('App', () => {
  test(
    'renders successfully',
    () => {
      render(<App />);
      const linkElement = screen.getByText(/Powered by esbuild with Typescript/i);
      expect(linkElement).toBeInTheDocument();
    },
    timeout
  );
});
