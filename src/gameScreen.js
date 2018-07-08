import React from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { setAsync, getAsync } from './component/helpers';
import { Attempts } from './component/attempts';
import { InputGuess } from './component/input-guess';
import { Header } from './component/header';

var count = 0,
  lastGame = 0,
  trueGame = 0,
  randomNumber = Math.floor(Math.random() * 100) + 1;

getAsync('attempts').then(data => {
  lastGame = data;
});
getAsync('gameNumber').then(data => {
  trueGame = data;
});

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastGame: lastGame === 10 ? 'Lost' : lastGame,
      trueGame: trueGame,
      game: false,
      attempts: 'Punch!',
      guess: 0,
      randomNumber: randomNumber,
      circleSize: 100
    };
    this.getGuess = this.getGuess.bind(this);
  }

  checkGuess = () => {
    count++;

    this.setState({
      circleSize: this.state.circleSize - 5
    });

    if (+this.state.guess === randomNumber) {
      this.setState({
        chance: 'Win!'
      });
      count;
      this.endGame();
    } else if (count === 10) {
      this.setState({
        chance: '',
        attempts: ''
      });
      this.endGame();
    } else {
      this.setState({
        attempts: 10 - count
      });
      if (+this.state.guess < randomNumber) {
        this.setState({
          chance: 'Low!'
        });
      } else if (+this.state.guess > randomNumber) {
        this.setState({
          chance: 'High!'
        });
      }
    }
  };

  getGuess = number =>
    this.setState({
      guess: number
    });

  startGame = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    this.setState({
      game: !this.state.game,
      attempts: 'Punch!',
      chance: '',
      randomNumber: randomNumber,
      trueGame: this.state.trueGame + 1,
      lastGame: count === 10 ? 'Lost' : count - 1,
      circleSize: 100
    });
    count = 0;
    console.log({ randomNumber, count }, this.state.lastGame);
  };

  endGame = () => {
    this.setState(
      {
        game: !this.state.game,
        guess: '',
        speech: +this.state.guess === randomNumber ? 'YAPPY!' : 'OHHH!'
      },
      () => {
        setTimeout(() => {
          this.setState({
            speech: 'Again?'
          });
        }, 3000);
      }
    );
    setAsync('attempts', count === 10 ? count : count - 1);
    setAsync('gameNumber', this.state.trueGame);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.body} behavior="padding">
        <Header lastGame={this.state.lastGame} trueGame={this.state.trueGame} />
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <View style={styles.mainRounds}>
              <Text style={styles.mainText}>{this.state.chance}</Text>
            </View>
            <Attempts
              attempts={this.state.attempts}
              checkGuess={this.checkGuess}
              count={count}
              circleSize={this.state.circleSize}
              padding={this.state.padding}
            />
          </View>
          <InputGuess
            game={this.state.game}
            value={this.state.guess}
            speech={this.state.speech}
            startGame={this.startGame}
            getGuess={this.getGuess}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 100
  },
  main: {
    backgroundColor: '#9B9B9B',
    alignSelf: 'center',
    height: 350,
    width: 350,
    borderRadius: 350,
    justifyContent: 'space-between'
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 32,
    marginTop: 16
  },
  mainRounds: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  mainText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6041CF'
  }
});
