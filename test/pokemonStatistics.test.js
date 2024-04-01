import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonStatistics from '../src/components/PokemonStatistics';
import StatDetailRow from '../src/components/PokemonStatistics/StatDetailRow';

jest.mock('../src/components/PokemonStatistics/StatDetailRow', () => {
  return jest.fn(() => null); // Mock StatDetailRow component
});

describe('PokemonStatistics component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it('does not render any StatDetailRow component if data prop is not provided', () => {
    render(<PokemonStatistics />);

    // Check if StatDetailRow component is not called
    expect(StatDetailRow).not.toHaveBeenCalled();
  });
});
