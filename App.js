import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Head } from './src/screens/Head';
import { Main } from './src/screens/Main';

import StateProvider, { StateContext } from './src/store/StateProvider';

const App = () => {
  return (
    <StateProvider>
      <StateContext.Consumer>
        {({ styles }) => (
          <KeyboardAvoidingView style={styles.body} behavior="padding">
            <Head />
            <Main />
          </KeyboardAvoidingView>
        )}
      </StateContext.Consumer>
    </StateProvider>
  );
};

export default App;
