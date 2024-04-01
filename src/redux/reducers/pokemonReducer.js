//this project
import {
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  SORT_POKEMONS_FAILURE,
  SORT_POKEMONS_SUCCESS,
  SET_ERROR,
  SET_LOADING
} from '../actions/actionsList';


const initialState = {
    pokemons: [],
    loading: false,
    error: null,
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          pokemons: action.payload,
          loading: false,
          error: null
        };
      case FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          pokemons: [],
          loading: false,
          error: action.payload
        };
        case SORT_POKEMONS_SUCCESS:
          return {
            ...state,
            pokemons: action.payload,
            loading: false,
          };
        case SORT_POKEMONS_FAILURE:
          return {
            ...state,
            loading: false,
            sortError: action.payload
          };
        case SET_LOADING:
          return {
            ...state,
            loading: action.payload
          };
        case SET_ERROR:
          return {
            ...state,
            error: action.payload
          };
      default:
        return state;
    }
  };


export default pokemonReducer;
  