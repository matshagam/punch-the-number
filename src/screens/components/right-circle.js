import React from 'react';
import { Text, View } from 'react-native';
import { StateContext } from '../../store/StateProvider';

export const RightCircle = () => {
  return (
    <StateContext.Consumer>
      {({ trueGame, styles }) => (
        <View style={styles.games}>
          <View style={styles.headerCircles}>
            <Text style={styles.circlesText}>Game</Text>
            <Text style={styles.circlesText}>{trueGame}</Text>
          </View>
        </View>
      )}
    </StateContext.Consumer>
  );
};
