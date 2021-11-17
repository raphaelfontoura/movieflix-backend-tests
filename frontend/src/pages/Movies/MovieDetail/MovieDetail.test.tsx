import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetail from './MovieDetail';

describe('<MovieDetail />', () => {
  test('it should mount', () => {
    render(<MovieDetail />);
    
    const movieDetail = screen.getByTestId('MovieDetail');

    expect(movieDetail).toBeInTheDocument();
  });
});