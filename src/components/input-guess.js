import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export const InputGuess = props => {
  return (
    <View style={styles.circle}>
      <TextInput
        maxLength={3}
        placeholder={100}
        keyboardType="numeric"
        clearTextOnFocus={true}
        style={styles.text}
        onChangeText={value => props.getGuess(value)}
      />
      <Text style={styles.text}>{props.chance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
