import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const ButtonStart = props => {
  return (
    <TouchableOpacity onPress={props.hideScreen} style={styles.button}>
      <Text style={styles.p}>GAME</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  p: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
