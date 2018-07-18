import React from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

export default class Chance extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 2,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const { circle, timer, check, chance, game } = this.props;
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [10, 25, 10]
    });
    return (
      <View style={[circle, styles.circle]}>
        {game ? (
          <Animated.Text style={[styles.text, { fontSize: resizeText }]}>
            {!check ? timer : chance}
          </Animated.Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9B9B9B'
  },
  circle: {
    backgroundColor: '#fff'
  }
});
