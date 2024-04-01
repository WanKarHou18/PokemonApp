import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//third party
import PropTypes from 'prop-types';

//this project
import StatDetailRow from './StatDetailRow';

const PokemonStatistics= ({ 
    data
 }) => {
    return (
        <>
        {
            data ? data.stats.map((item)=>
                <StatDetailRow
                    key={item.stat.name} // Add a unique key prop for each StatDetailRow
                    label={item.stat.name}
                    progress={item.base_stat / 100}
                    text={`${item.base_stat}/100`}
                />
            ):
            <View></View>
        }
        </>
    );
};

PokemonStatistics.propTypes = {
    data: PropTypes.object, // Define PropTypes for the 'data' prop
};

export default PokemonStatistics;
