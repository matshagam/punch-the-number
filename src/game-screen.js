import React from 'react';
import { View, KeyboardAvoidingView, AsyncStorage } from 'react-native';

import { Attempts } from './components/attempts';
import { InputGuess } from './components/input-guess';
import { LeftCircle } from './components/left-circle';
import { RightCircle } from './components/right-circle';

import { setAsync, randomNumber, styles } from './helpers/helpers';

import ButtonGame from './components/button-game';
import Chance from './components/chance';

const COUNT = 0;

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: randomNumber(),
      lastGame: '',
      trueGame: '',
      game: false,
      check: false,
      speech: 'Start',
      chance: '',
      guess: 0,
      circleSize: 100,
      winner: '',
      timer: null
    };
    this.getGuess = this.getGuess.bind(this);
  }

  componentDidMount() {
    AsyncStorage.multiGet(['TRUE_GAME', 'LAST_GAME']).then(data => {
      this.setState({
        trueGame: Number(data[0][1]),
        lastGame: Number(data[1][1]) === 10 ? 'Lost' : Number(data[1][1]),
        winner: Number(data[1][1]) === 10 ? false : true
      });
    });
  }

  checkGuess = () => {
    COUNT++;

    if (Number(this.state.guess) === this.state.randomNumber || COUNT === 10) {
      this.endGame();
    } else {
      this.setState(
        {
          attempts: 10 - COUNT,
          circleSize: this.state.circleSize - 5,
          check: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              check: false
            });
          }, 1000);
        }
      );
    }
    if (Number(this.state.guess) < this.state.randomNumber) {
      this.setState({
        chance: 'Low!'
      });
    } else if (Number(this.state.guess) > this.state.randomNumber) {
      this.setState({
        chance: 'High!'
      });
    }
  };

  getGuess = number => {
    this.setState({
      guess: number
    });
  };

  startGame = () => {
    this.setState({
      game: !this.state.game,
      attempts: 'Punch!',
      randomNumber: randomNumber(),
      trueGame: this.state.trueGame + 1,
      circleSize: 100,
      timer: 20
    });
    COUNT = 0;

    this.startTimer();
  };

  endGame = () => {
    this.state.timer === 0 || COUNT === 10
      ? this.setState({ winner: false, lastGame: 'Lost' })
      : this.setState({
          winner: true,
          circleSize: 100,
          lastGame: COUNT
        });

    setAsync(
      'LAST_GAME',
      Number(this.state.guess) === this.state.randomNumber ? COUNT : 10
    );
    setAsync('TRUE_GAME', this.state.trueGame);

    this.setState(
      {
        game: !this.state.game,
        speech:
          Number(this.state.guess) === this.state.randomNumber
            ? 'YAPPY!'
            : 'OHHH!',
        guess: '',
        attempts: ''
      },
      () => {
        setTimeout(() => {
          this.setState({
            speech: 'Again?'
          });
        }, 3000);
      }
    );
    clearInterval(this.state.interval);
  };

  startTimer = () => {
    let interval = setInterval(this.tick, 1000);
    this.setState({ interval });
  };

  tick = () => {
    if (this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    } else {
      this.endGame();
    }
  };

  render() {
    const {
      randomNumber,
      lastGame,
      trueGame,
      timer,
      game,
      attempts,
      chance,
      check,
      circleSize,
      speech,
      winner
    } = this.state;
    console.log({
      randomNumber,
      lastGame,
      trueGame,
      timer,
      game,
      attempts,
      chance,
      check,
      circleSize,
      speech,
      winner,
      COUNT
    });

    return (
      <KeyboardAvoidingView style={styles.body} behavior="padding">
        <View style={styles.head}>
          <LeftCircle
            lastGame={lastGame}
            games={styles.games}
            circlesText={styles.circlesText}
            headerCircles={styles.headerCircles}
          />
          <RightCircle
            trueGame={trueGame}
            games={styles.games}
            circlesText={styles.circlesText}
            headerCircles={styles.headerCircles}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Chance
              game={game}
              timer={timer}
              check={check}
              chance={chance}
              circle={styles.circle}
            />
            <Attempts
              game={game}
              COUNT={COUNT}
              winner={winner}
              attempts={attempts}
              circle={styles.circle}
              circleSize={circleSize}
              checkGuess={this.checkGuess}
            />
          </View>
          {!game ? (
            <ButtonGame
              speech={speech}
              circle={styles.circle}
              startGame={this.startGame}
            />
          ) : (
            <InputGuess
              circle={styles.circle}
              getGuess={this.getGuess}
              randomNumber={randomNumber}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    );
  }
}
