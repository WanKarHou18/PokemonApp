
//third party
import axios from "axios";


const URL = "https://pokeapi.co/api/v2/pokemon/";
/**
 * 
 * @returns  json
 */
export const fetchPokemonsNameUrl = () => axios.get(URL).then((res) => {
    if(res.status === 200){
        return res.data;
    }else{
        return null;
    }
    })
    .catch(error => {
        return null
    });

/**
 * 
 * @returns  json
 */
export const fetchPokemonsByID = (id) => axios.get(`${URL}${id}`).then((res) => {
    if(res.status === 200){
        return res.data;
    }else{
        return null;
    }
    })
    .catch(error => {
        return null;
    });

/**
 * 
 * @returns  json
 */
export const fetchPokemonSpeciesById = (id) => axios.get(`${URL}/species/${id}`).then((res) => {
    return res.json;
    })
    .catch(error => {
       return null;
    });