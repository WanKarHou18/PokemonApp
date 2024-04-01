import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

//this project
import { getTypeColor } from '../../helper/colorUtils';

//third party
import PropTypes from 'prop-types';

const CardView = ({ imageSource, title, onPress, colorType }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.card,{height:'50px'}]} 
      testID='pokemon-card'
    >
      <Image 
        source={{ uri: imageSource }} 
        style={[styles.cardImage,{backgroundColor: getTypeColor(colorType),}]} 
      />
      <View style={[styles.cardContent]}>
        <Text  style={[styles.cardTitle,{color: getTypeColor(colorType)}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

CardView.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  colorType: PropTypes.string.isRequired,
};

export default CardView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '90%',
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardImage: {
      width: 120,
      height: 100,
      borderRadius: 40,
      marginRight: 20,
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    cardDescription: {
      fontSize: 16,
      lineHeight: 24,
    },

  });