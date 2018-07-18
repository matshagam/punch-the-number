import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import { Attempts } from './components/attempts';
import { InputGuess } from './components/input-guess';
import { LeftCircle } from './components/left-circle';
import { RightCircle } from './components/right-circle';

import { setAsync, getAsync, randomNumber, styles } from './helpers/helpers';

import ButtonGame from './components/button-game';
import Chance from './components/chance';

var count = 0,
  LAST_GAME,
  TRUE_GAME,
  INTERVAL;

getAsync('TRUE_GAME').then(data => {
  TRUE_GAME = data;
});
getAsync('LAST_GAME').then(data => {
  LAST_GAME = data === 10 ? 'Lost' : data;
});

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: randomNumber(),
      lastGame: LAST_GAME,
      trueGame: TRUE_GAME,
      game: false,
      check: false,
      speech: 'Start',
      attempts: 'Punch!',
      chance: '',
      guess: 0,
      circleSize: 100,
      winner: typeof LAST_GAME === 'number' ? true : false
    };
    this.getGuess = this.getGuess.bind(this);
  }

  checkGuess = () => {
    count++;

    if (Number(this.state.guess) === this.state.randomNumber || count === 10) {
      this.endGame();
    } else {
      this.setState(
        {
          attempts: 10 - count,
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
    getAsync('LAST_GAME').then(data => {
      this.setState({
        lastGame: data === 10 ? 'Lost' : data
      });
    });

    this.setState({
      game: !this.state.game,
      attempts: 'Punch!',
      randomNumber: randomNumber(),
      trueGame: this.state.trueGame + 1,
      circleSize: 100,
      timer: 20
    });
    count = 0;

    this.startTimer();
  };

  endGame = () => {
    this.state.timer === 0 || count === 10
      ? this.setState({ winner: false })
      : this.setState({
          winner: true,
          circleSize: 100
        });

    setAsync(
      'LAST_GAME',
      Number(this.state.guess) === this.state.randomNumber ? count : 10
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
    clearInterval(INTERVAL);
  };

  startTimer = () => {
    INTERVAL = setInterval(this.tick, 1000);
  };

  tick = () => {
    if (this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    } else {
      // this.setState({ winner: false });
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
    console.log({ randomNumber, winner });

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
              count={count}
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
