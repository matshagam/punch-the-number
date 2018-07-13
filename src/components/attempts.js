import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity
} from 'react-native';

export const Attempts = props => {
  return (
    <View style={[styles.button, { backgroundColor: '#6041CF' }]}>
      <TouchableOpacity
        style={
          props.count !== 10
            ? [
                styles.button,
                {
                  height: props.circleSize,
                  width: props.circleSize,
                  borderRadius: props.circleSize
                }
              ]
            : [styles.button, { backgroundColor: '#6041CF' }]
        }
        onPress={props.checkGuess}
        onPressOut={Keyboard.dismiss}
        accessible={false}
        disabled={!props.game ? true : false}
      >
        <Text style={styles.p}>{props.attempts}</Text>
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
