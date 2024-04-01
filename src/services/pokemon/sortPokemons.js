//this project
import { 
  fetchPokemonsSuccess, 
  fetchPokemonsFailure 
} from "../../redux/actions/pokemonAction";
  
import { sortAscendingly, sortDescendingly } from "../../helper/utils";

export const sortPokemonAscendingly =() => {
  return async (dispatch,getState) => {
      try {

          const state = getState();
          const pokemonsData = state.pokemon.pokemons;
          let sortedPokemons = [];

          if (pokemonsData) {
              sortedPokemons = sortAscendingly(pokemonsData);
              if (sortedPokemons) {
                dispatch(fetchPokemonsSuccess(sortedPokemons))
              } else {
                dispatch(fetchPokemonsFailure('Failed to fetch pokemon data'))
              }
          } else {
            dispatch(fetchPokemonsFailure('Failed to fetch pokemon data'))
          }
      } catch (error) {
        dispatch(fetchPokemonsFailure(error.message))
      }
  };
};


export const sortPokemonDescendingly =() => {
  return async (dispatch,getState) => {
      try {

          const state = getState();
          const pokemonsData = state.pokemon.pokemons;
          let sortedPokemons = [];

          if (pokemonsData) {
              sortedPokemons = sortDescendingly(pokemonsData);
              if (sortedPokemons) {
                dispatch(fetchPokemonsSuccess(sortedPokemons))

              } else {
                dispatch(fetchPokemonsFailure('Failed to fetch pokemon data'))
              }
          } else {
            dispatch(fetchPokemonsFailure('Failed to fetch pokemon data'))
          }
      } catch (error) {
        dispatch(fetchPokemonsFailure(error.message ))
      }
  };
};