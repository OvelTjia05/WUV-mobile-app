import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import {Logo, WuvIcon} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';

import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  const onUsername = text => {
    setUsername(text);
  };

  const onPassword = text => {
    setPassword(text);
  };

  const login = async () => {
    try {
      const res = await axios.post('http://192.168.43.230:3000/api/login', {
        username: username,
        password: password,
      });

      if (res.data.status == 'Success Login') {
        const dataUser = res.data.data[0];
        console.log(dataUser);
        navigation.navigate('DashBoard', {dataUser});
      } else {
        const pesan = res.data.message;
        Alert.alert('Login Gagal', pesan);
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

        <TextInput placeHolder="Username" onChangeText={onUsername} />
        <TextInput placeHolder="Password" onChangeText={onPassword} />
        <Button
          label="Log In"
          backgroundColor="#6B30A4"
          width={130}
          textColor="white"
          marginTop={30}
          navigation={navigation}
          toScreen={'DashBoard'}
          onClick={login}
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
