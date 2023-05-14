import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Ovel, Monyet, JoTu, Jerico} from '../../assets/icons';
import Button from '../../components/atoms/Button';

const AboutUs = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.timPengembang}>TIM PENGEMBANG</Text>
        <View style={styles.profil}>
          <Image source={Ovel} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teks}>Ovel Tjia</Text>
        </View>
        <View style={styles.profil}>
          <Image source={Jerico} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teks}>Jerico Katong</Text>
        </View>
        <View style={styles.profil}>
          <Image source={Monyet} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teks}>Josua Wuisan</Text>
        </View>
        <View style={styles.profil}>
          <Image source={JoTu} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teks}>Joshua Tumatar</Text>
        </View>
        <View style={styles.profil}>
          <Image source={Monyet} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teks}>Laurance Pontoh</Text>
        </View>
      </View>
      <Button
        label="Kembali"
        backgroundColor="#6B30A4"
        width={130}
        textColor="#fff"
        navigation={navigation}
        toScreen="DashBoard"
      />
    </ScrollView>
  );
};

export default AboutUs;

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
  timPengembang: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    color: 'black',
    marginVertical: 20,
  },
  profil: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    left: 20,
    columnGap: 40,
    marginVertical: 10,
  },
  foto: {
    height: 80,
    width: 80,
    borderColor: 'violet',
    borderWidth: 3,
    borderRadius: 100,
    overflow: 'hidden',
  },
  teks: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: 'black',
  },
});
