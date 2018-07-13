import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ButtonStart } from './components/button-start';
import GameScreen from './game-screen';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      name: 'Game'
    };
  }

  hideScreen = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return this.state.visible ? (
      <View style={styles.container}>
        <Text style={styles.h2}>Punch the number</Text>
        <Text style={styles.p}>
          I have selected a random number between 1 and 100. See if you can
          guess it in 10 turns or less. I'll tell you if your guess was too high
          or too low and else how many attempts you have. You may train your
          brain or we show your last guesses.
        </Text>
        <ButtonStart name={this.state.name} hideScreen={this.hideScreen} />
      </View>
    ) : (
      <GameScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  h2: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 16
  },
  p: {
    margin: 16,
    fontSize: 16
  }
});
