import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Logo, WuvIcon} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

const SignUp = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#3E1A7E', '#682CA2']}
      style={styles.background}
      start={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Image source={WuvIcon} style={styles.wuv} />
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
      <ScrollView style={styles.loginContainer}>
        <View style={styles.logCon}>
          <View style={styles.taggleContainer}>
            <Button
              label="Log In"
              backgroundColor="#fff"
              width={130}
              textColor="#6B30A4"
              navigation={navigation}
              toScreen="SignIn"
            />
            <Button
              label="Sign Up"
              backgroundColor="#6B30A4"
              width={130}
              textColor="white"
              disabled={true}
            />
          </View>
          <TextInput placeHolder="Name" />
          <TextInput placeHolder="Username" />
          <TextInput placeHolder="Phone number" />
          <TextInput placeHolder="Address" />
          <TextInput placeHolder="Password" />
          <Button
            label="Sign Up"
            backgroundColor="#6B30A4"
            width={130}
            textColor="white"
            marginTop={30}
            paddingBottom={30}
            navigation={navigation}
            toScreen={'SignIn'}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wuv: {
    position: 'absolute',
    top: 80,
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
  },
  logCon: {
    alignItems: 'center',
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
