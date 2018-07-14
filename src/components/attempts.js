import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity
} from 'react-native';

export const Attempts = ({ game, checkGuess, attempts, circleSize, count }) => {
  return (
    <View style={[styles.button, { backgroundColor: '#6041CF' }]}>
      <TouchableOpacity
        style={
          count !== 10 && game
            ? [
                styles.button,
                {
                  height: circleSize,
                  width: circleSize,
                  borderRadius: circleSize
                }
              ]
            : [styles.button, { backgroundColor: '#6041CF' }]
        }
        onPress={checkGuess}
        onPressOut={Keyboard.dismiss}
        accessible={false}
        disabled={!game ? true : false}
      >
        <Text style={styles.p}>{game ? attempts : null}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center'
  },
  p: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B9B9B'
  }
});
