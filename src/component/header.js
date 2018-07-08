import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Header = props => {
  return (
    <View style={styles.header}>
      <View style={[styles.lastGame, styles.games]}>
        <View style={styles.headerCircles}>
          <Text style={styles.circlesText}>Last</Text>
          <Text style={styles.circlesText}>{props.lastGame}</Text>
        </View>
      </View>
      <View style={styles.games}>
        <View style={styles.headerCircles}>
          <Text style={styles.circlesText}>Game</Text>
          <Text style={styles.circlesText}>{props.trueGame}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  games: {
    height: 130,
    width: 130,
    borderRadius: 130,
    backgroundColor: '#9B9B9B',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  lastGame: {
    justifyContent: 'flex-end'
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
