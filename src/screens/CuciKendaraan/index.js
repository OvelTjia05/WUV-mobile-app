import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Header from '../../components/molecules/Header';
import Garis from '../../components/atoms/Garis';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

import {Sepeda, Plus, Minus, Motor, Mobil, Truck} from '../../assets/icons';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';

const CuciKendaraan = ({navigation, route}) => {
  const [sepedaQty, setSepedaQty] = useState(0);
  const [motorQty, setMotorQty] = useState(0);
  const [mobilQty, setMobilQty] = useState(0);
  const [truckQty, setTruckQty] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const [totalKendaraan, setTotalKendaraan] = useState(0);

  const [dataKendaraan, setDataKendaraan] = useState();

  const {dataUser} = route.params;
  const username = dataUser.username;

  useEffect(() => {
    getDataKendaraan();
    console.log(dataKendaraan);
  }, []);

  useEffect(() => {
    const jumlahKendaraan = sepedaQty + motorQty + mobilQty + truckQty;
    setTotalKendaraan(jumlahKendaraan);
  }, [sepedaQty, motorQty, mobilQty, truckQty]);

  const getDataKendaraan = async () => {
    try {
      const res = await axios.get('http://192.168.43.230:3000/api/vehicles');
      setDataKendaraan(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleQtyChange = (vehicleType, operation) => {
    switch (vehicleType) {
      case 'sepeda':
        if (operation === 'plus') {
          setSepedaQty(sepedaQty + 1);
          setTotalHarga(totalHarga + 24000);
        } else {
          setSepedaQty(sepedaQty - 1);
          setTotalHarga(totalHarga - 24000);
        }
        break;
      case 'motor':
        if (operation === 'plus') {
          setMotorQty(motorQty + 1);
          setTotalHarga(totalHarga + 30000);
        } else {
          setMotorQty(motorQty - 1);
          setTotalHarga(totalHarga - 30000);
        }
        break;
      case 'mobil':
        if (operation === 'plus') {
          setMobilQty(mobilQty + 1);
          setTotalHarga(totalHarga + 40000);
        } else {
          setMobilQty(mobilQty - 1);
          setTotalHarga(totalHarga - 40000);
        }
        break;
      case 'truck':
        if (operation === 'plus') {
          setTruckQty(truckQty + 1);
          setTotalHarga(totalHarga + 50000);
        } else {
          setTruckQty(truckQty - 1);
          setTotalHarga(totalHarga - 50000);
        }
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header label="Cuci Kendaraan" />
      <View style={styles.containerContent}>
        <Gap />
        <Garis />
        <Text style={styles.subHeader}>Kategori Kendaraan</Text>
        <View style={styles.containerCategory}>
          <Sepeda />

          {dataKendaraan && dataKendaraan[0] && dataKendaraan[0].price && (
            <Text style={styles.textPrice}>Rp. {dataKendaraan[0].price}</Text>
          )}

          <View style={styles.containerJumlah}>
            <TouchableOpacity
              onPress={() => handleQtyChange('sepeda', 'minus')}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{sepedaQty}</Text>
            <TouchableOpacity onPress={() => handleQtyChange('sepeda', 'plus')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Motor />

          <Text style={styles.textPrice}>
            Rp.
            {dataKendaraan && dataKendaraan[1] && dataKendaraan[1].price && (
              <Text style={styles.textPrice}>Rp. {dataKendaraan[1].price}</Text>
            )}
          </Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity onPress={() => handleQtyChange('motor', 'minus')}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{motorQty}</Text>
            <TouchableOpacity onPress={() => handleQtyChange('motor', 'plus')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Mobil />

          <Text style={styles.textPrice}>
            Rp.
            {dataKendaraan && dataKendaraan[2] && dataKendaraan[2].price && (
              <Text style={styles.textPrice}>Rp. {dataKendaraan[2].price}</Text>
            )}
          </Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity onPress={() => handleQtyChange('mobil', 'minus')}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{mobilQty}</Text>
            <TouchableOpacity onPress={() => handleQtyChange('mobil', 'plus')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerCategory}>
          <Truck />

          <Text style={styles.textPrice}>
            Rp.
            {dataKendaraan && dataKendaraan[3] && dataKendaraan[3].price && (
              <Text style={styles.textPrice}>Rp. {dataKendaraan[3].price}</Text>
            )}
          </Text>

          <View style={styles.containerJumlah}>
            <TouchableOpacity onPress={() => handleQtyChange('truck', 'minus')}>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.textSum}>{truckQty}</Text>
            <TouchableOpacity onPress={() => handleQtyChange('truck', 'plus')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subHeader2}>Total harga : Rp. {totalHarga}</Text>
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
            sepedaQty,
            motorQty,
            mobilQty,
            truckQty,
            totalHarga,
            totalKendaraan,
            username,
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
