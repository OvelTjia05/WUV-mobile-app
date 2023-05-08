import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

const Login = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#3E1A7E', '#682CA2']}
      style={styles.background}
      start={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Text style={styles.title}>WUV</Text>
        <Text style={styles.subTitle}>Wash Ur Vehicle</Text>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.taggleContainer}>
          <Button
            label="Log In"
            backgroundColor="#6B30A4"
            width={130}
            textColor="white"
            disabled={true}
          />
          <Button
            label="Sign Up"
            backgroundColor="#fff"
            width={130}
            textColor="#6B30A4"
            navigation={navigation}
            toScreen="SignUp"
          />
        </View>

        <TextInput placeHolder="Username" />
        <TextInput placeHolder="Password" />
        <Button
          label="Log In"
          backgroundColor="#6B30A4"
          width={130}
          textColor="white"
          marginTop={30}
        />
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
  subTitle: {
    flex: 1,
    alignItems: 'center',
    marginTop: -500,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: 'white',
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
  },
  loginContainer: {
    backgroundColor: '#D9D9D9',
    height: '60%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    paddingTop: 15,
  },
  taggleContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 260,
    borderRadius: 50,
    marginBottom: 30,
  },
});

export default Login;
