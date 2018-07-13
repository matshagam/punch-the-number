import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ButtonGame = props => {
  return (
    <TouchableOpacity style={styles.circle} onPress={props.startGame}>
      <Text style={styles.text}>{props.speech}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  circle: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 16
  }
});
