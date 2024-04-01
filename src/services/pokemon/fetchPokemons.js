//this project
import * as api from "../../api/pokemon/pokemonAPI";
import { 
  fetchPokemonsSuccess, 
  fetchPokemonsFailure,
  setLoading,
} from "../../redux/actions/pokemonAction";

/**
 * fetch data of pokemons
 * 
 */
export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const result = await api.fetchPokemonsNameUrl();
        if (result) {
            const pokemonIds = result.results.map((pokemon, index) => index + 1);
            const pokemonData = await fetchPokemonByIds(pokemonIds);
            if (pokemonData) {
                dispatch(fetchPokemonsSuccess(pokemonData));
            } else {
                dispatch(fetchPokemonsFailure('Failed to fetch pokemon data' ));
            }
        } else {
          dispatch(fetchPokemonsFailure('Failed to fetch pokemon data' ));
        }
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(fetchPokemonsFailure(error.message));
        dispatch(setLoading(false));
      };
    }
};


/**
 * Fetch data of pokemon by id/name
 * Using id to represent.
 * @param {*} id
 * @returns 
 */
export const fetchPokemonById = id => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const data = [];
      const result = await api.fetchPokemonsByID(id);
      if (result) {
        data.push(result);
        dispatch(fetchPokemonsSuccess(data));
      } else {
        dispatch(fetchPokemonsFailure('Failed to fetch pokemon data' ));
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(fetchPokemonsFailure(error.message));
      dispatch(setLoading(false));
    }
  };
};


/**
 * Fetches Pokémon data for multiple IDs
 * @param {Array} ids Array of Pokémon IDs
 * @returns {Array} Array of Pokémon data objects
 */
export const fetchPokemonByIds = async (ids) => {
  try {
    const promises = ids.map(id => api.fetchPokemonsByID(id));
    const pokemonDataArray = await Promise.all(promises);
    return pokemonDataArray.filter(result => result !== null);
  } catch (error) {
    return [];
  }
};