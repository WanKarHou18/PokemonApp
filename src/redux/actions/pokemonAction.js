//this project
import {
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  SORT_POKEMONS_FAILURE,
  SORT_POKEMONS_SUCCESS,
  SET_LOADING,
  SET_ERROR,
} from './actionsList';

export const fetchPokemonsSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error
});

export const sortPokemonsFailure = (error) => ({
  type: SORT_POKEMONS_FAILURE,
  payload: error
});

export const sortPokemonsSuccess = (sortedPokemons) => ({
  type: SORT_POKEMONS_SUCCESS,
  payload: sortedPokemons
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) =>({
  type: SET_ERROR,
  payload: error,
})