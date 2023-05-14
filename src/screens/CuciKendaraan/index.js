import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
            <TouchableOpacity>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>2</Text>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Motor />

          <Text style={styles.textPrice}>Rp. 40.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>2</Text>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Mobil />

          <Text style={styles.textPrice}>Rp. 50.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>2</Text>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Truck />

          <Text style={styles.textPrice}>Rp. 50.000</Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>2</Text>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subHeader2}>Total harga : Rp.144.000</Text>
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
          toScreen="DashBoard"
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
