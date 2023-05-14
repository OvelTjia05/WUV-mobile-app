import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {Close, Cuci, Menu, Monyet, Status} from '../../assets/icons';
import Garis from '../../components/atoms/Garis';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

const DashBoard = ({navigation}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(animation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyles = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuToggle}>
          <Menu />
        </TouchableOpacity>
        <Text style={styles.teks}>DashBoard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={Monyet} style={styles.foto} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Garis />
        <Gap />
        <Text style={styles.teks}>Welcome Back Jowu</Text>
        <Gap />
        <Cuci />
        <Button
          label="Cuci Kendaraan"
          backgroundColor="#6129F6"
          width={150}
          textColor="white"
          navigation={navigation}
          toScreen={'CuciKendaraan'}
        />
        <Gap />
        <Status />
        <Button
          label="Status Transaksi"
          backgroundColor="#6129F6"
          width={150}
          textColor="white"
          navigation={navigation}
          toScreen={'Riwayat'}
        />
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={isMenuOpen}
        onRequestClose={handleMenuToggle}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={handleMenuToggle}>
          <Animated.View style={[styles.menu, animatedStyles]}>
            <Garis />
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Text style={styles.sidebarText}>Setting</Text>
            </TouchableOpacity>
            <Garis />
            <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
              <Text style={styles.sidebarText}>Feedback</Text>
            </TouchableOpacity>
            <Garis />
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
              <Text style={styles.sidebarText}>About</Text>
            </TouchableOpacity>
            <Garis />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    columnGap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  foto: {
    height: 50,
    width: 50,
    borderColor: 'violet',
    borderWidth: 2,
    borderRadius: 100,
    overflow: 'hidden',
  },
  teks: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'black',
  },
  modalBackground: {
    flex: 1,
  },
  sidebarText: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: 'white',
  },
  menu: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: 'rgba(28, 31, 38, 0.7)',
    padding: 20,
    borderRightWidth: 1,
    borderColor: 'lightgray',
  },
});
