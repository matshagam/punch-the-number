import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const LeftCircle = ({ games, lastGame, headerCircles, circlesText }) => {
  return (
    <View style={[styles.games, games]}>
      <View style={headerCircles}>
        <Text style={circlesText}>Last</Text>
        <Text style={circlesText}>{lastGame}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  games: {
    justifyContent: 'flex-end'
  }
});
