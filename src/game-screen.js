import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { Attempts } from './components/attempts';
import { InputGuess } from './components/input-guess';
import { LeftCircle } from './components/left-circle';
import { RightCircle } from './components/right-circle';

import { setAsync, getAsync, randomNumber } from './components/helpers';

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
      circleSize: 100,
      guess: 0
    };
    this.getGuess = this.getGuess.bind(this);
  }

  checkGuess = () => {
    count++;

    if (Number(this.state.guess) === this.state.randomNumber) {
      this.endGame();
    } else if (count === 10) {
      this.setState({
        attempts: ''
      });
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
    clearInterval(INTERVAL);
    INTERVAL = 20;

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
        guess: ''
      },
      () => {
        setTimeout(() => {
          this.setState({
            speech: 'Again?'
          });
        }, 3000);
      }
    );
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
      speech
    } = this.state;
    console.log({ randomNumber });

    return (
      <KeyboardAvoidingView style={styles.body} behavior="padding">
        <View style={styles.head}>
          <LeftCircle lastGame={lastGame} />
          <RightCircle trueGame={trueGame} />
        </View>
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Chance
              game={game}
              timer={timer}
              check={check}
              chance={chance}
              attempts={attempts}
              styler={styles.circle}
            />
            <Attempts
              game={game}
              count={count}
              attempts={attempts}
              circleSize={circleSize}
              checkGuess={this.checkGuess}
            />
          </View>
          {!game ? (
            <ButtonGame
              speech={speech}
              styler={styles.circle}
              startGame={this.startGame}
            />
          ) : (
            <InputGuess styler={styles.circle} getGuess={this.getGuess} />
          )}
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
  head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16
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
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center'
  }
});
