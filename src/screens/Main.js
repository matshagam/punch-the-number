import React from 'react';
import { View } from 'react-native';
import { StateContext } from '../store/StateProvider';

import ButtonGame from '../screens/components/button-game';
import Chance from '../screens/components/chance';
import { Attempts } from '../screens/components/attempts';
import { InputGuess } from '../screens/components/input-guess';

export const Main = () => {
  return (
    <StateContext.Consumer>
      {({ styles, game }) => (
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Chance />
            <Attempts />
          </View>
          {!game ? <ButtonGame /> : <InputGuess />}
        </View>
      )}
    </StateContext.Consumer>
  );
};
