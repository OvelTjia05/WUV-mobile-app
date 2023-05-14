import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Garis from '../../components/atoms/Garis';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

const Pembayaran = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header label="Pembayaran" />
      <Gap />
      <View style={styles.body}>
        <Garis />
        <Text style={styles.teks}>
          Masukan nominal sesuai dengan total harga
        </Text>
        <View style={styles.bayar}>
          <Text style={styles.rp}>Rp.</Text>
          <TextInput style={styles.input} placeholder="Input Amount" />
        </View>
        <Garis />
        <View style={styles.total}>
          <Text style={styles.totalteks}>Total harga :</Text>
          <View style={styles.price}>
            <Text style={styles.totalteks}>Rp. </Text>
            <Text style={styles.totalteks}>144000</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Button
            label="Kembali"
            backgroundColor="#6B30A4"
            width={130}
            textColor="#fff"
            navigation={navigation}
            toScreen="DashBoard"
          />
          <Button
            label="Bayar"
            backgroundColor="#6B30A4"
            width={130}
            textColor="#fff"
            navigation={navigation}
            toScreen="DashBoard"
          />
        </View>
      </View>
    </View>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    padding: 20,
  },
  bottom: {
    flexDirection: 'row',
    columnGap: 50,
  },
  bayar: {
    marginTop: 10,
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    padding: 0,
  },
  teks: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
  price: {
    flexDirection: 'row',
  },
  totalteks: {
    color: '#409A49',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  rp: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },
  total: {
    marginBottom: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
  },
});
