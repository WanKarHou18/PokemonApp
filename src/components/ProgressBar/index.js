import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//third party
import PropTypes from 'prop-types';

const CustomProgressBar = ({ progress, text }) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.progressBar, { width: `${progress * 100}%`}]}>
                <Text style={styles.progressText}>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 20,
        borderRadius: 10,
        backgroundColor: '#3498db',
        overflow: 'hidden', 
    },
    progressBar: {
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#2980b9',
    },
    progressText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        display: 'flex',
        
    },
});

CustomProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default CustomProgressBar;