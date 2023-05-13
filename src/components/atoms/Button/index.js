import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  label,
  backgroundColor,
  textColor,
  navigation,
  toScreen,
  width,
  marginTop,
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => navigation.navigate(toScreen)}
        style={[
          styles.button,
          {
            backgroundColor: `${backgroundColor}`,
            width: width,
            marginTop: marginTop,
          },
        ]}>
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
    // width: 10,
    padding: 12,
    // marginTop: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    borderRadius: 37,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
