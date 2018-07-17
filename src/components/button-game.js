import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

export default class ButtonGame extends React.PureComponent {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const { startGame, speech } = this.props;
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 25, 20]
    });
    return (
      <TouchableOpacity style={styles.circle} onPress={startGame}>
        <Animated.Text style={[styles.text, { fontSize: resizeText }]}>
          {speech}
        </Animated.Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  circle: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 16
  }
});
