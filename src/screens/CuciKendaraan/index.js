import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Cuci} from '../../assets/icons';

import Header from '../../components/molecules/Header';
import Garis from '../../components/atoms/Garis';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

import {
  Sepeda,
  Plus,
  Minus,
  Motor,
  Mobil,
  Truck,
  Kembali,
  Berikutnya,
} from '../../assets/icons';

const CuciKendaraan = ({navigation}) => {
  const [jumlahSepeda, setJumlahSepeda] = useState(0);
  const [jumlahMotor, setJumlahMotor] = useState(0);
  const [jumlahMobil, setJumlahMobil] = useState(0);
  const [jumlahTruk, setJumlahTruk] = useState(0);

  const [totalHarga, setTotalHarga] = useState(0);
  const [totalKendaraan, setTotalKendaraan] = useState(0);

  useEffect(() => {
    setTotalHarga(
      jumlahSepeda * 24000 +
        jumlahMotor * 30000 +
        jumlahMobil * 40000 +
        jumlahTruk * 50000,
    );
  }, [jumlahSepeda, jumlahMotor, jumlahMobil, jumlahTruk]);

  return (
    <ScrollView style={styles.container}>
      <Header label="Cuci Kendaraan" />
      <View style={styles.containerContent}>
        <Gap />
        <Garis />
        <Text style={styles.subHeader}>Kategori Kendaraan</Text>
        <View style={styles.containerCategory}>
          <Sepeda />

          <Text style={styles.textPrice}>Rp. 24.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity
              onPress={() => {
                if (jumlahSepeda == 0) {
                  Alert.alert('Maaf angka sudah nol');
                } else {
                  const jumlahSementara = jumlahSepeda - 1;
                  setJumlahSepeda(jumlahSementara);
                }
              }}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{jumlahSepeda}</Text>
            <TouchableOpacity
              onPress={() => {
                const jumlahSementara = jumlahSepeda + 1;
                setJumlahSepeda(jumlahSementara);
              }}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Motor />

          <Text style={styles.textPrice}>Rp. 40.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity
              onPress={() => {
                if (jumlahMotor == 0) {
                  Alert.alert('Maaf angka sudah nol');
                } else {
                  const jumlahSementara = jumlahMotor - 1;
                  setJumlahMotor(jumlahSementara);
                }
              }}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{jumlahMotor}</Text>
            <TouchableOpacity
              onPress={() => {
                const jumlahSementara = jumlahSepeda + 1;
                setJumlahMotor(jumlahSementara);
              }}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Mobil />

          <Text style={styles.textPrice}>Rp. 50.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity
              onPress={() => {
                if (jumlahMobil == 0) {
                  Alert.alert('Maaf angka sudah nol');
                } else {
                  const jumlahSementara = jumlahMobil - 1;
                  setJumlahMobil(jumlahSementara);
                }
              }}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{jumlahMobil}</Text>
            <TouchableOpacity
              onPress={() => {
                const jumlahSementara = jumlahMobil + 1;
                setJumlahMobil(jumlahSementara);
              }}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Truck />

          <Text style={styles.textPrice}>Rp. 50.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity
              onPress={() => {
                if (jumlahTruk == 0) {
                  Alert.alert('Maaf angka sudah nol');
                } else {
                  const jumlahSementara = jumlahTruk - 1;
                  setJumlahTruk(jumlahSementara);
                }
              }}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{jumlahTruk}</Text>
            <TouchableOpacity
              onPress={() => {
                const jumlahSementara = jumlahTruk + 1;
                setJumlahTruk(jumlahSementara);
              }}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subHeader2}>Total harga : Rp.{totalHarga}</Text>
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
          label="Lanjutkan"
          backgroundColor="#6B30A4"
          width={130}
          textColor="#fff"
          navigation={navigation}
          toScreen="Pembayaran"
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
    </ScrollView>
  );
};

export default CuciKendaraan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    margin: 20,
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 19,
    color: 'black',
    marginBottom: 30,
  },
  containerCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerJumlah: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222222',
  },
  textSum: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#222222',
    marginRight: 5,
    marginLeft: 5,
  },
  subHeader2: {
    textAlign: 'right',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#409A49',
    marginBottom: 30,
  },
  containerCategory2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'right',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 40,
  },
});
