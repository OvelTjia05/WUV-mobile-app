import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Pembayaran = ({route}) => {
  const [text, setText] = useState('');
  const dataRinci = route.params;

  return (
    <View>
      <Text>Pembayaran</Text>
      <TextInput onChangeText={text => setText(text)} />
      <Text>Total bayar: {dataRinci.totalHarga}</Text>

      <Button
        label="Kembali"
        backgroundColor="#6B30A4"
        width={130}
        textColor="#fff"
        navigation={navigation}
        toScreen="CuciKendaraan"
      />
      <Button
        label="Lanjutkan"
        backgroundColor="#6B30A4"
        width={130}
        textColor="#fff"
        navigation={navigation}
        toScreen="Bayar"
        data={{
          jumlahSepeda,
          jumlahMotor,
          jumlahMobil,
          jumlahTruk,
          totalHarga,
          totalKendaraan,
        }}
      />
    </View>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({});
