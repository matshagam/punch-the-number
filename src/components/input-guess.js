import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export const InputGuess = ({ getGuess, chance }) => {
  return (
    <View style={styles.circle}>
      <TextInput
        maxLength={3}
        placeholder={100}
        keyboardType="numeric"
        clearTextOnFocus={true}
        style={styles.text}
        onChangeText={value => getGuess(value)}
      />
      <Text style={styles.text}>{chance}</Text>
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
