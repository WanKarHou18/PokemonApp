import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    ImageBackground,
} from 'react-native';

//third party
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

//this project
import background from '../../../assets/pokemonBackground.jpg';

import PokemonFlatList from '../../components/PokemonFlatList';
import SearchField from '../../components/SearchField'
import CustomErrorAlert from '../../components/Alert';
import LoadingAnimation from '../../components/Loading';

import { 
    fetchPokemons, 
    fetchPokemonById 
} from '../../services/pokemon/fetchPokemons';

import { 
    sortPokemonAscendingly, 
    sortPokemonDescendingly 
} from '../../services/pokemon/sortPokemons';

import { isEmptyString } from '../../helper/stringUtils';
import { getDimension } from '../../helper/utils';

import { setError } from '../../redux/actions/pokemonAction';

const initialValues = {
    searchText: '',
    ascendingSort: true,
    errorMessage: '',
    alertVisible: false,
}

const Home = ({
     pokemons, 
     loading,
     error,
     fetchPokemons,
     fetchPokemonById,
     sortPokemonAscendingly,
     sortPokemonDescendingly,
     setError,
     navigation 
}) =>{

    const { width, height } = getDimension();
    const [searchText, setSearchText] = useState(initialValues.searchText);
    const [ascendingSort, setAscendingSort] = useState(initialValues.ascendingSort);
    const [alertVisible, setAlertVisible] = useState(initialValues.alertVisible);
    const [errorMessage, setErrorMessage] = useState(initialValues.errorMessage)

    const showAlert = () => {
        setAlertVisible(true);
    };
    
    const hideAlert = () => {
        setAlertVisible(false);
    };

    useEffect(() => {
        if(error){
            setErrorMessage(error);
            showAlert()
        }
    }, [
        error
    ]);

    //Fetch Pokemons data when mounting
    useEffect(() => {
        fetchPokemons()
    }, []);

    //After remove words to empty in search text field, fetch all pokemons
    useEffect(() => {
       if(isEmptyString(searchText)){
        fetchPokemons();
       }
    }, [
        searchText
    ]);

    // searchText refer to id or name
    const handleSearch = useCallback(()=>{
        if (isEmptyString(searchText)) {
            fetchPokemons()
        }else {
            fetchPokemonById(searchText.toLocaleLowerCase())
        }
    },[
        searchText
    ]);

    const handleSort = () => {
        setAscendingSort(!ascendingSort);
        if(ascendingSort && pokemons.length>0){
            sortPokemonAscendingly();
        }else{
            sortPokemonDescendingly();
        }
    };


    return (
        <ImageBackground
            source={background}
            style={{ width: width, height: height, marginTop:'10px' }}
        >
            <View style = {[{flex:1}]}>
                <SearchField
                    handleSearch = {handleSearch}
                    handleSort = {handleSort}
                    searchText = {searchText}
                    setSearchText = {setSearchText}
                    ascendingSort={ascendingSort}
                />
                <PokemonFlatList
                    data = {pokemons}
                    navigation={navigation}
                />
                <CustomErrorAlert 
                    visible={alertVisible} 
                    onDismiss={hideAlert} 
                    message={errorMessage}
                    setError={setError}
                />

            </View>
            <LoadingAnimation visible={loading} />
        </ImageBackground>
    );
}

Home.propTypes = {
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    fetchPokemons: PropTypes.func.isRequired,
    fetchPokemonById: PropTypes.func.isRequired,
    sortPokemonAscendingly: PropTypes.func.isRequired,
    sortPokemonDescendingly: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const {
        pokemons, 
        loading, 
        error 
    } = state.pokemon

    return {
        pokemons,
        error,
        loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPokemons: bindActionCreators(fetchPokemons, dispatch),
        fetchPokemonById: bindActionCreators(fetchPokemonById, dispatch),
        sortPokemonAscendingly: bindActionCreators(sortPokemonAscendingly, dispatch),
        sortPokemonDescendingly : bindActionCreators(sortPokemonDescendingly, dispatch),
        setError: bindActionCreators(setError, dispatch)
    } 
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);