import React from 'react';
import { View } from 'react-native';
import { StateContext } from '../store/StateProvider';

import { LeftCircle } from '../screens/components/left-circle';
import { RightCircle } from '../screens/components/right-circle';

export const Head = () => {
  return (
    <StateContext.Consumer>
      {({ styles }) => (
        <View style={styles.head}>
          <LeftCircle />
          <RightCircle />
        </View>
      )}
    </StateContext.Consumer>
  );
};
