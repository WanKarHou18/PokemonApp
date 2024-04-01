import React from 'react';

//this project
import { View, StyleSheet, FlatList} from 'react-native';
import CardView from '../CardView';

const PokemonFlatList = ({ 
    data,
    navigation,
}) => {
    return (
        <>
        {
            data?
            <FlatList
                testID='pokemon-flat-list'
                keyExtractor={item => item.order}
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer]}>
                        <CardView
                            imageSource={item.sprites.front_default}
                            title={item.name}
                            onPress={() => 
                                navigation.navigate('detail',{ data: item,colorType:item.types[0].type.name})}
                            colorType={item.types[0].type.name}
                        />
                    </View>
                )}
            />:<View></View>
        }
        </>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default PokemonFlatList;