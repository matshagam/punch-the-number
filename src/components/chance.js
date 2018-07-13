import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Chance = props => {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{props.timer !== 0 ? props.timer : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B9B9B'
  }
});
