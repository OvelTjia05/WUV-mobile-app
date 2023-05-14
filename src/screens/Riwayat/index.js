import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Button from '../../components/atoms/Button';
import DashBoard from '../DashBoard';
import Gap from '../../components/atoms/Gap';
import Garis from '../../components/atoms/Garis';

const Riwayat = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Riwayat</Text>
        <View style={styles.card}>
          <Text>17 April 2023</Text>
          <View style={styles.isiCard}>
            <View style={styles.isiCard2}>
              <Text>1</Text>
              <Text>Motor</Text>
            </View>
            <Text>Rp. 30000</Text>
          </View>
          <Garis />
          <View style={styles.total}>
            <Text>Total</Text>
            <Text style={styles.totalTeks}>Rp. 30000</Text>
          </View>
        </View>
      </View>
      <Button
        label="Back"
        backgroundColor="#6129F6"
        width={130}
        textColor="white"
        navigation={navigation}
        toScreen="DashBoard"
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
