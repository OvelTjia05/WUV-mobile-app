import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Garis from '../../components/atoms/Garis';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

import axios from 'axios';
import moment from 'moment';

const Pembayaran = ({navigation, route}) => {
  const [uangBayar, setuangBayar] = useState();
  const [resultAmbil, setResultAmbil] = useState();
  const [uangKembalian, setUangKembalian] = useState(0);

  const {dataUser} = route.params;

  console.log(dataUser);

  useEffect(() => {
    getDataUser();
    console.log(resultAmbil);
  }, []);

  const getDataUser = async () => {
    try {
      const res = await axios.get(
        `http://192.168.43.230:3000/api/users${dataUser.username}`,
      );
      setResultAmbil(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const tambahTransaksi = async () => {
    if (uangBayar >= dataUser.totalHarga) {
      setUangKembalian(uangBayar - dataUser.totalHarga);

      const transaksiData = {
        tanggalTransaksi: moment().format('DD MMMM YYYY, HH:mm'), // Tanggal transaksi (gunakan nilai yang sesuai)
        jumlahSepeda: dataUser.sepedaQty,
        jumlahMotor: dataUser.motorQty,
        jumlahMobil: dataUser.mobilQty,
        jumlahTruk: dataUser.truckQty,
        totalHarga: dataUser.totalHarga,
        totalBayar: uangBayar,
        uangKembalian: uangKembalian,
      };
      console.log('ini transaksi data');

      try {
        console.log('didalam catch');
        console.log(resultAmbil.username);
        const response = await axios.patch(
          `http://192.168.43.230:3000/api/tambahTransaksi${resultAmbil.username}`,
          transaksiData,
        );

        console.log('Transaksi berhasil ditambahkan:', response.data);
        const dataUser = resultAmbil;
        navigation.navigate('DashBoard', {dataUser});
      } catch (error) {
        console.error(
          'Terjadi kesalahan saat menambahkan transaksi:',
          error.message,
        );
      }
    }
  };

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
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Input Amount"
            onChangeText={uangBayar => setuangBayar(uangBayar)}
          />
        </View>
        <Garis />
        <View style={styles.total}>
          <Text style={styles.totalteks}>Total harga :</Text>
          <View style={styles.price}>
            <Text style={styles.totalteks}>Rp. </Text>
            <Text style={styles.totalteks}>{dataUser.totalHarga}</Text>
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
            onClick={tambahTransaksi}
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
