import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from '../../assets/icons';

const SplashScreen = ({navigate}) => {
  return (
    <View style={styles.container}>
      {/* <Logo /> */}
      <LinearGradient
        colors={['#3E1A7E', '#682CA2']}
        style={styles.backGround}
        start={{x: 1, y: 0}}
        // start={{x: 1, y: 0}}
        // end={{x: 0, y: 1}}
      >
        <Text style={styles.title}>WUV</Text>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
