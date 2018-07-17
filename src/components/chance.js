import React from 'react';
import { Text, StyleSheet, View, Animated, Easing } from 'react-native';

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
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const { styler, timer, check, chance, game } = this.props;
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 30, 10]
    });
    return (
      <View style={[styler, styles.circle]}>
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
