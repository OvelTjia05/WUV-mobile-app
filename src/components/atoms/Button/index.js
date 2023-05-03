import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, backgroundColor, textColor, navigation, toScreen}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(toScreen)}
        style={[styles.button, {backgroundColor: `${backgroundColor}`}]}>
        <Text style={[styles.label, {color: `${textColor}`}]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: 360,
    marginTop: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Poppins-Medium',
  },
});
