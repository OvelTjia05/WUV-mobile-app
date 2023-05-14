import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Logo, WuvIcon} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Feedback');
    }, 3000);
  });

  return (
    <LinearGradient
      colors={['#3E1A7E', '#682CA2']}
      style={styles.background}
      start={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Image source={WuvIcon} />
      </View>
      <View style={styles.logoContainer}>
        <Logo />
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
    marginTop: 100,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 100,
  },
});

export default SplashScreen;
