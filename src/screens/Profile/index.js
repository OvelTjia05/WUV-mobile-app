import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Monyet} from '../../assets/icons';
import Button from '../../components/atoms/Button';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.card}>
          <Text style={styles.teksProfil}>PROFILE</Text>
          <Image source={Monyet} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teksProfil}>Joshua Tumatar</Text>
          <Text style={styles.teks}>PHONE NUMBER:</Text>
          <Text style={styles.detail}>081234567899</Text>
          <Text style={styles.teks}>RESIDENCE:</Text>
          <Text style={styles.detail}>Minahasa Utara</Text>
          <Text style={styles.teks}>MEMBERSHIP:</Text>
          <Text style={styles.detail}>Silver</Text>
        </View>
      </View>
      <Button
        label="Back"
        backgroundColor="#6129F6"
        width={130}
        textColor="white"
        navigation={navigation}
        toScreen="AboutUs"
      />
    </ScrollView>
  );
};

export default Profile;

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
    alignItems: 'center',
    // justifyContent: 'center',
    height: 640,
    width: 298,
    borderRadius: 50,
    marginVertical: 50,
    backgroundColor: 'white',
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
