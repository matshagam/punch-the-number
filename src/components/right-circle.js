import React from 'react';
import { Text, View } from 'react-native';

export const RightCircle = ({
  headerCircles,
  games,
  circlesText,
  trueGame
}) => {
  return (
    <View style={games}>
      <View style={headerCircles}>
        <Text style={circlesText}>Game</Text>
        <Text style={circlesText}>{trueGame}</Text>
      </View>
    </View>
  );
};
