import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Gap = () => {
  return <View style={styles.space}></View>;
};

export default Gap;

const styles = StyleSheet.create({
  space: {
    height: 24,
  },
});
