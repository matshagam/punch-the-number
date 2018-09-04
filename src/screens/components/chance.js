import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { StateContext } from '../../store/StateProvider';

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
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [10, 25, 10]
    });
    return (
      <StateContext.Consumer>
        {({ styles, game, check, timer, chance }) => (
          <View style={[styles.circle, { backgroundColor: '#fff' }]}>
            {game ? (
              <Animated.Text
                style={{
                  fontSize: resizeText,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#9B9B9B'
                }}
              >
                {!check ? timer : chance}
              </Animated.Text>
            ) : null}
          </View>
        )}
      </StateContext.Consumer>
    );
  }
}
