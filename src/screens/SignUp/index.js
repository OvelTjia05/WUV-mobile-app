import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import {Logo, WuvIcon} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

import axios from 'axios';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setName('');
    setPhoneNumber('');
    setAddress('');
    setUsername('');
    setPassword('');
  }, []);

  const onName = text => {
    setName(text);
  };

  const onPhoneNumber = text => {
    setPhoneNumber(text);
  };

  const onAddress = text => {
    setAddress(text);
  };

  const onUsername = text => {
    setUsername(text);
  };

  const onPassword = text => {
    setPassword(text);
  };

  const register = async () => {
    try {
      const res = await axios.post('http://192.168.43.230:3000/api/register', {
        name,
        phoneNumber,
        address,
        username,
        password,
        membership: 'Silver',
        jumlahGunakanJasa: 0,
      });

      if (res.data.status == 'Success') {
        navigation.navigate('SignIn');
      } else {
        console.log(res.data.status);
        const pesan = res.data.message;
        Alert.alert('Registrasi Gagal', pesan);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <TextInput placeHolder="Name" onChangeText={onName} />
          <TextInput placeHolder="Username" onChangeText={onUsername} />
          <TextInput placeHolder="Phone number" onChangeText={onPhoneNumber} />
          <TextInput placeHolder="Address" onChangeText={onAddress} />
          <TextInput placeHolder="Password" onChangeText={onPassword} />
          <Button
            label="Sign Up"
            backgroundColor="#6B30A4"
            width={130}
            textColor="white"
            marginTop={30}
            paddingBottom={30}
            navigation={navigation}
            onClick={register}
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
