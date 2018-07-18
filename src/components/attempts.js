import React from 'react';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const Attempts = ({
  game,
  count,
  circle,
  attempts,
  checkGuess,
  circleSize
}) => {
  return (
    <View style={[circle, styles.button, { backgroundColor: '#6041CF' }]}>
      <TouchableOpacity
        style={
          count !== 10 && game
            ? [
                circle,
                styles.button,
                {
                  height: circleSize,
                  width: circleSize,
                  borderRadius: circleSize
                }
              ]
            : [circle, styles.button, { backgroundColor: '#6041CF' }]
        }
        accessible={false}
        onPress={checkGuess}
        onPressOut={Keyboard.dismiss}
        disabled={!game ? true : false}
      >
        <Text style={styles.p}>{game ? attempts : null}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
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
