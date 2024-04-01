import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

//third party
import PropTypes from 'prop-types';

const LoadingAnimation = ({ visible }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start(() => spin());
  };

  useEffect(() => {
    if (visible) {
      spin();
    }
  }, [visible]);

  const spinAnimation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={[StyleSheet.absoluteFill, styles.container, { display: visible ? 'flex' : 'none' }]}>
      <Animated.View
        style={[
          styles.pokeball,
          { transform: [{ rotate: spinAnimation }] }
        ]}
      >
        <View style={styles.innerPokeball} />
      </Animated.View>
    </View>
  );
};

LoadingAnimation.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background to overlay content
  },
  pokeball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerPokeball: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1
  }
});