import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

const Header = ({label}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#6129F6',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    }
})