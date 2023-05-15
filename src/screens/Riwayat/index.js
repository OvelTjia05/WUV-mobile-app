import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../components/atoms/Button';
import DashBoard from '../DashBoard';
import Gap from '../../components/atoms/Gap';
import Garis from '../../components/atoms/Garis';
import axios from 'axios';
import moment from 'moment';

const Riwayat = ({navigation, route}) => {
  const {dataUser} = route.params;
  // setUsername(dataUser.username);
  // const [username, setUsername] = useState('');
  const [data, setData] = useState();
  // const [arrayRiwayatTransaksi, setAraayRiwayatTransaksi] = useState();

  useEffect(() => {
    getDataTransaksiUser();
  }, []);

  const getDataTransaksiUser = async () => {
    try {
      console.log('ini dalam catc');
      console.log(dataUser.username);
      const response = await axios.get(
        `http://192.168.43.230:3000/api/users${dataUser.username}`,
      );
      const userData = response.data.data.riwayatTransaksi;
      setData(userData);
      console.log(userData);
      // setAraayRiwayatTransaksi(data.riwayatTransaksi);
      // console.log(arrayRiwayatTransaksi);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Riwayat</Text>
        {data && data.length > 0 ? (
          data.map((value, index) => (
            <View style={styles.card} key={index}>
              <Text>
                {moment(value.tanggalTransaksi).format('DD MMMM YYYY, HH:mm')}
              </Text>
              <View style={styles.isiCard}>
                <View style={styles.isiCard2}>
                  <Text>{value.jumlahSepeda}</Text>
                  <Text>Sepeda</Text>
                </View>
                <Text>
                  Rp.{' '}
                  {(() => {
                    if (value.jumlahSepeda) {
                      return value.jumlahSepeda * 240000;
                    }
                  })()}
                </Text>
              </View>

              <View style={styles.isiCard}>
                <View style={styles.isiCard2}>
                  <Text>{value.jumlahMotor}</Text>
                  <Text>Motor</Text>
                </View>
                <Text>
                  Rp.{' '}
                  {(() => {
                    if (value.jumlahMotor) {
                      return value.jumlahMotor * 300000;
                    }
                  })()}
                </Text>
              </View>

              <View style={styles.isiCard}>
                <View style={styles.isiCard2}>
                  <Text>{value.jumlahMobil}</Text>
                  <Text>Mobil</Text>
                </View>
                <Text>
                  Rp.{' '}
                  {(() => {
                    if (value.jumlahMobil) {
                      return value.jumlahMobil * 400000;
                    }
                  })()}
                </Text>
              </View>

              <View style={styles.isiCard}>
                <View style={styles.isiCard2}>
                  <Text>{value.jumlahTruk}</Text>
                  <Text>Truck</Text>
                </View>
                <Text>
                  Rp.{' '}
                  {(() => {
                    if (value.jumlahTruk) {
                      return value.jumlahTruk * 500000;
                    }
                  })()}
                </Text>
              </View>

              <Garis />
              <View style={styles.total}>
                <Text>Total</Text>
                <Text style={styles.totalTeks}>Rp. {value.totalHarga}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <Button
        label="Back"
        backgroundColor="#6129F6"
        width={130}
        textColor="white"
        navigation={navigation}
        toScreen={'DashBoard'}
        data={dataUser}
      />
    </ScrollView>
  );
};

export default Riwayat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    height: 69,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#6129F6',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  card: {
    padding: 10,
    // height: 200,
    width: 320,
    borderRadius: 20,
    marginVertical: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  isiCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  isiCard2: {
    flexDirection: 'row',
    columnGap: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'right',
  },
  totalTeks: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'green',
  },
  teksProfil: {
    color: '#6B30A4',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 20,
  },
  teks: {
    color: '#6B30A4',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    marginTop: 20,
  },
  detail: {
    color: '#6B30A4',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  foto: {
    height: 110,
    width: 110,
    borderColor: 'violet',
    borderWidth: 3,
    borderRadius: 100,
    overflow: 'hidden',
  },
});
