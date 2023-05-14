import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import Header from '../../components/molecules/Header';

const Feedback = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header label="Feedback" />
      <Gap />
      <Gap />
      <Gap />
      <Gap />
      <Text style={styles.teks}>Kritik dan saran :</Text>
      <Input
        style={styles.textInput}
        placeholder="Masukan saran anda...."
        placeholderTextColor="#A9A9A9"
        textAlignVertical="top"
        multiline={true}
      />
      <View style={styles.bottom}>
        <Button
          label="Kembali"
          backgroundColor="#6B30A4"
          width={130}
          textColor="#fff"
          navigation={navigation}
          toScreen="DashBoard"
        />
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    marginTop: 190,
    right: 100,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingStart: 10,
    left: 40,
    width: '80%',
    height: 200,
    color: 'black',
  },
  teks: {
    marginLeft: 50,
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
});
