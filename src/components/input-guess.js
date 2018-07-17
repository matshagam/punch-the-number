import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const InputGuess = ({ getGuess }) => {
  return (
    <View style={styles.circle}>
      <TextInput
        maxLength={2}
        keyboardType="numeric"
        clearTextOnFocus={true}
        style={styles.text}
        placeholder="100"
        onChangeText={value => getGuess(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 16,
    backgroundColor: '#fff'
  }
});
