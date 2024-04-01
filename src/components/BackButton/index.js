import React from 'react';
import {TouchableOpacity } from 'react-native';

//this project
import { Ionicons } from '@expo/vector-icons';

//third party
import PropTypes from 'prop-types';

const BackButton = ({
    navigation,
    iconWidth,
    iconColor
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={iconWidth} color={iconColor} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired, 
  iconWidth: PropTypes.number.isRequired, 
  iconColor: PropTypes.string.isRequired, 
};

export default BackButton;