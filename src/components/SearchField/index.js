import React from 'react';

//this project
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

//third party
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const SearchField = ({ 
    handleSearch, 
    handleSort, 
    searchText, 
    setSearchText,
    ascendingSort
}) => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="id or name for search"
                value={searchText}
                onChangeText={setSearchText}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={handleSort}>
                <Ionicons name={ascendingSort ? 'arrow-up' : 'arrow-down'} size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

SearchField.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleSort: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    ascendingSort: PropTypes.bool.isRequired,
};


export default SearchField;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center',
        paddingVertical: 10,
    },
    searchButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        padding: 10,
    },
    sortButton: {
        backgroundColor: '#3498db',
        borderRadius: 20,
        padding: 10,
      },
});
