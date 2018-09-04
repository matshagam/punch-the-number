import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { StateContext } from '../../store/StateProvider';

export const LeftCircle = () => {
  return (
    <StateContext.Consumer>
      {({ styles, lastGame }) => (
        <View style={[styled.games, styles.games]}>
          <View style={styles.headerCircles}>
            <Text style={styles.circlesText}>Last</Text>
            <Text style={styles.circlesText}>{lastGame}</Text>
          </View>
        </View>
      )}
    </StateContext.Consumer>
  );
};

const styled = StyleSheet.create({
  games: {
    justifyContent: 'flex-end'
  }
});
