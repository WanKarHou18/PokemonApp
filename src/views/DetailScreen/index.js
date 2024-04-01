import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

//this project
import { getTypeColor } from '../../helper/colorUtils';
import PokemonStatistics from '../../components/PokemonStatistics';

//third-party
import { FontAwesome5 } from '@expo/vector-icons'; 
import PropTypes from 'prop-types';

export function Detail ({route}) {

  const { data, colorType} = route.params;
  const color = getTypeColor(colorType);

  const PokemonImage = ()=>{
    return(
      <View style={[styles.imageContainer, { backgroundColor:color}]}>
        <Image
          source={{ uri: data.sprites.front_default }}
          style={styles.productImage}
        />
      </View>
    )
  }

  const PokemonName = () =>{
    return(
      <Text style={[styles.title, {color: color}]}>{data.name}</Text>
    )
  }

  const PokemonWeightHeight =()=>{
    return(
      <View style={styles.characteristicsRow}>
          <View style={styles.characteristicItem}>
              <FontAwesome5 name="weight" size={30} color={color} />
              <Text style={styles.characteristicItem}>{data.weight}</Text>
          </View>
          <View style={styles.characteristicItem}>
              <FontAwesome5 name="ruler-vertical" size={30} color={color} />
              <Text style={styles.characteristicItem}>{data.height}</Text>
          </View>
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <PokemonImage/>
      <View style={styles.detailsContainer}>
        <PokemonName/>
        <Text style={styles.characteristicsLabel}>Characteristics</Text>
        <PokemonWeightHeight/>
        <PokemonStatistics
          data = {data}
        />
      </View>
    </ScrollView>
  );
};

Detail.propTypes = {
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    // backgroundColor:'#faecd2'
  },
  titleContainer:{
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  characteristicsLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#4CAF50'
  },
  
  characteristicsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  characteristicItem: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
  },
});
