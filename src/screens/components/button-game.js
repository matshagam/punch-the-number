import React from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';
import { StateContext } from '../../store/StateProvider';

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
    const resizeText = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [20, 25, 20]
    });
    return (
      <StateContext.Consumer>
        {({ startGame, speech, styles }) => (
          <TouchableOpacity
            style={[
              styles.circle,
              {
                backgroundColor: 'red',
                alignSelf: 'center',
                margin: 16
              }
            ]}
            onPress={startGame}
          >
            <Animated.Text
              style={{
                fontSize: resizeText,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              {speech}
            </Animated.Text>
          </TouchableOpacity>
        )}
      </StateContext.Consumer>
    );
  }
}
