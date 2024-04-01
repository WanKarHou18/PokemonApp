import * as api from '../src/api/pokemon/pokemonAPI';
import * as fetchPokemonsModule from '../src/services/pokemon/fetchPokemons';
import * as pokemonAction from '../src/redux/actions/pokemonAction';

// Mocking the dependencies
jest.mock('../src/api/pokemon/pokemonAPI');

// Mocking redux actions
jest.mock('../src/redux/actions/pokemonAction', () => ({
  fetchPokemonsSuccess: jest.fn(),
  fetchPokemonsFailure: jest.fn(),
  setLoading: jest.fn(),
}));

// Mocking data
const mockPokemonsNameUrl = {
  results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
};

const mockPokemonData = {
  name: 'bulbasaur',
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  id: 1,
};

describe('fetchPokemons', () => {
  it('should fetch and dispatch pokemons data successfully', async () => {
    api.fetchPokemonsNameUrl.mockResolvedValue(mockPokemonsNameUrl);
    api.fetchPokemonsByID.mockResolvedValue(mockPokemonData);

    const dispatch = jest.fn();
    await fetchPokemonsModule.fetchPokemons()(dispatch);

    expect(pokemonAction.setLoading).toHaveBeenCalledWith(true);
    expect(api.fetchPokemonsNameUrl).toHaveBeenCalled();
    expect(api.fetchPokemonsByID).toHaveBeenCalledWith(1);
    expect(pokemonAction.fetchPokemonsSuccess).toHaveBeenCalledWith([mockPokemonData]);
    expect(pokemonAction.setLoading).toHaveBeenCalledWith(false);
  });

  it('should dispatch fetchPokemonsFailure action when fetching pokemons data fails', async () => {
    api.fetchPokemonsNameUrl.mockRejectedValue(new Error('Failed to fetch data'));

    const dispatch = jest.fn();
    await fetchPokemonsModule.fetchPokemons()(dispatch);

    expect(pokemonAction.setLoading).toHaveBeenCalledWith(true);
    expect(api.fetchPokemonsNameUrl).toHaveBeenCalled();
    expect(pokemonAction.fetchPokemonsFailure).toHaveBeenCalledWith('Failed to fetch data');
    expect(pokemonAction.setLoading).toHaveBeenCalledWith(false);
  });
});

describe('fetchPokemonById', () => {
  it('should fetch and dispatch pokemon data by id successfully', async () => {
    api.fetchPokemonsByID.mockResolvedValue(mockPokemonData);

    const dispatch = jest.fn();
    await fetchPokemonsModule.fetchPokemonById(1)(dispatch);

    expect(pokemonAction.setLoading).toHaveBeenCalledWith(true);
    expect(api.fetchPokemonsByID).toHaveBeenCalledWith(1);
    expect(pokemonAction.fetchPokemonsSuccess).toHaveBeenCalledWith([mockPokemonData]);
    expect(pokemonAction.setLoading).toHaveBeenCalledWith(false);
  });

  it('should dispatch fetchPokemonsFailure action when fetching pokemon data by id fails', async () => {
    api.fetchPokemonsByID.mockRejectedValue(new Error('Failed to fetch data'));

    const dispatch = jest.fn();
    await fetchPokemonsModule.fetchPokemonById(1)(dispatch);

    expect(pokemonAction.setLoading).toHaveBeenCalledWith(true);
    expect(api.fetchPokemonsByID).toHaveBeenCalledWith(1);
    expect(pokemonAction.fetchPokemonsFailure).toHaveBeenCalledWith('Failed to fetch data');
    expect(pokemonAction.setLoading).toHaveBeenCalledWith(false);
  });
});

