import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const InputGuess = ({ getGuess, circle, randomNumber }) => {
  return (
    <View style={[circle, styles.circle]}>
      <TextInput
        maxLength={randomNumber !== 100 ? 2 : 3}
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
    fontWeight: 'bold',
    padding: 24
  },
  circle: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    margin: 16
  }
});
