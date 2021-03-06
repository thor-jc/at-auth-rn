import { KeepAwake, registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';

class App extends React.Component {

  componentWillMount() {
    if (__DEV__) {  // eslint-disable-line no-undef
      KeepAwake.activate();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>HEY</Text>
          <AuthScreen />
          <Text>WTF</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22235630',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25
  },
});
export default App;
//export default registerRootComponent(App);
