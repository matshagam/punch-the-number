import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export const InputGuess = props => {
  return (
    <View style={[styles.mainRounds, styles.guess]}>
      {!props.game ? (
        <TextInput
          maxLength={3}
          placeholder="100"
          keyboardType="numeric"
          clearTextOnFocus={true}
          style={styles.mainText}
          onChangeText={value => props.getGuess(value)}
        />
      ) : (
        <TouchableOpacity style={styles.button} onPress={props.startGame}>
          <Text style={styles.buttonText}>{props.speech}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainRounds: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  guess: {
    alignSelf: 'center',
    margin: 16
  },
  mainText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B9B9B'
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignSelf: 'center',
    margin: 16
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
