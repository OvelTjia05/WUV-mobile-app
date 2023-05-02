import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigate}) => {
  return (
    <LinearGradient
      colors={['#3E1A7E', '#682CA2']}
      style={styles.background}
      start={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Text style={styles.title}>WUV</Text>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
    fontFamily: 'Poppins-Medium',
    fontSize: 64,
    color: 'white',
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
  },
});

export default SplashScreen;
