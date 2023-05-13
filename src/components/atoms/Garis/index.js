import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Garis = () => {
  return <View style={styles.garis} />;
};

export default Garis;

const styles = StyleSheet.create({
  garis: {
    marginVertical: 10,
    marginHorizontal: 'auto',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
});
