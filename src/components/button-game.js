import React from 'react';
import { StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

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
    const { startGame, speech, styler } = this.props;
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 25, 20]
    });
    return (
      <TouchableOpacity style={[styler, styles.circle]} onPress={startGame}>
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
    alignSelf: 'center',
    margin: 16
  }
});
