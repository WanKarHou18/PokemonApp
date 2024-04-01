import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonFlatList from '../src/components/PokemonFlatList';

describe('PokemonFlatList', () => {
  const data = [
    { 
      name: 'Pikachu',
      order: 25,
      sprites: {
        front_default: 'https://example.com/pikachu.png'
      },
      types: [
        { type: { name: 'electric' } }
      ]
    },
  ];

  const navigationMock = {
    navigate: jest.fn()
  };

  it('renders correctly', () => {
    const { getByTestId } = render(<PokemonFlatList data={data} navigation={navigationMock} />);
    const flatList = getByTestId('pokemon-flat-list');
    expect(flatList).toBeTruthy();
  });

  it('renders correct number of items', () => {
    const { getAllByTestId } = render(<PokemonFlatList data={data} navigation={navigationMock} />);
    const renderedItems = getAllByTestId('pokemon-card');
    expect(renderedItems.length).toEqual(data.length);
  });

});