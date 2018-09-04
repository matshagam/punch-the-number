import React from 'react';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { StateContext } from '../../store/StateProvider';

export const Attempts = () => {
  return (
    <StateContext.Consumer>
      {({ game, COUNT, styles, winner, attempts, checkGuess, circleSize }) => (
        <View
          style={[styles.circle, styled.button, { backgroundColor: '#6041CF' }]}
        >
          <TouchableOpacity
            style={[
              styles.circle,
              styled.button,
              COUNT !== 10
                ? {
                    height: circleSize,
                    width: circleSize,
                    borderRadius: circleSize
                  }
                : null,
              !winner && !game ? { backgroundColor: '#6041CF' } : null
            ]}
            accessible={false}
            onPress={checkGuess}
            onPressOut={Keyboard.dismiss}
            disabled={!game ? true : false}
          >
            <Text style={styled.p}>{game ? attempts : null}</Text>
          </TouchableOpacity>
        </View>
      )}
    </StateContext.Consumer>
  );
};

const styled = StyleSheet.create({
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
