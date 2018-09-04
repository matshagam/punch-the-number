import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { StateContext } from '../../store/StateProvider';

export const InputGuess = () => {
  return (
    <StateContext.Consumer>
      {({ getGuess, styles, randomNumber }) => (
        <View style={[styles.circle, styled.circle]}>
          <TextInput
            maxLength={randomNumber !== 100 ? 2 : 3}
            keyboardType="numeric"
            clearTextOnFocus={true}
            style={styled.text}
            placeholder="100"
            onChangeText={value => getGuess(value)}
          />
        </View>
      )}
    </StateContext.Consumer>
  );
};

const styled = StyleSheet.create({
  text: {
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 24
  },
  circle: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    margin: 16
  }
});
