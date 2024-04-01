import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//this project
import CustomProgressBar from '../../ProgressBar';

//third party
import PropTypes from 'prop-types';

const StatDetailRow = ({ label, progress, text }) => {
    return (
        <View style={styles.row}>
            <View style={styles.labelContainer}>
                <Text style={styles.detailLabel}>{label}</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <CustomProgressBar progress={progress} text={text} />
            </View>
        </View>
    );
};

StatDetailRow.propTypes = {
    label: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired, 
    text: PropTypes.string.isRequired,
};

export default StatDetailRow;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      labelContainer: {
          flex: 2,
          alignItems:'flex-end',
          marginRight: 10,
      },
      progressBarContainer: {
          flex: 3, 
      },
      detailLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});