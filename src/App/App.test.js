import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('App has correct text', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Your app goes here :)');
});
