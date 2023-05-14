import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/Header'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header label="Setting"/>
        <Gap/>
        <Gap />
        <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.teks}>Log Out</Text>
      </TouchableOpacity>
        <View style={styles.bottom}>
        <Button
          label="Kembali"
          backgroundColor="#6B30A4"
          width={130}
          textColor="#fff"
          navigation={navigation}
          toScreen="DashBoard"
        />
        </View>
     
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container:{
        height: '100%',
        flex: 1,
    },
    bottom:{
        position: 'absolute',
        left: 10,
        bottom: 20,
    },
    teks:{
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: '#EBEAF880',
        fontFamily: 'Poppins-Medium',
        fontSize: 26,
        color: 'black',
        textAlign: 'center',
    }

})