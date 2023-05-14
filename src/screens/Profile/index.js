import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {JoTu} from '../../assets/icons';
import Button from '../../components/atoms/Button';

const Profile = ({navigation, route}) => {
  const {dataUser} = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.card}>
          <Text style={styles.teksProfil}>PROFILE</Text>
          <Image source={JoTu} style={styles.foto} resizeMode="cover" />
          <Text style={styles.teksProfil}>{dataUser.name}</Text>
          <Text style={styles.teks}>PHONE NUMBER:</Text>
          <Text style={styles.detail}>{dataUser.phoneNumber}</Text>
          <Text style={styles.teks}>RESIDENCE:</Text>
          <Text style={styles.detail}>{dataUser.address}</Text>
          <Text style={styles.teks}>MEMBERSHIP:</Text>
          <Text style={styles.detail}>{dataUser.membership}</Text>
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
    height: 540,
    width: 298,
    borderRadius: 50,
    marginVertical: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
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
