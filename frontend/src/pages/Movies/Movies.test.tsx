import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movies from './Movies';

describe('<Movies />', () => {
  test('it should mount', () => {
    render(<Movies />);
    
    const movies = screen.getByTestId('Movies');

    expect(movies).toBeInTheDocument();
  });
});