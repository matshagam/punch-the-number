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
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 30, 10]
    });
    return (
      <View style={styles.circle}>
        <Animated.Text style={[styles.text, { fontSize: resizeText }]}>
          {this.props.timer !== 0 ? this.props.timer : ''}
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9B9B9B'
  }
});
