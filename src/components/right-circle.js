import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const RightCircle = props => {
  return (
    <View style={styles.games}>
      <View style={styles.headerCircles}>
        <Text style={styles.circlesText}>Game</Text>
        <Text style={styles.circlesText}>{props.trueGame}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  games: {
    height: 130,
    width: 130,
    borderRadius: 130,
    backgroundColor: '#9B9B9B',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  headerCircles: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 5
  },
  circlesText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9B9B9B'
  }
});
