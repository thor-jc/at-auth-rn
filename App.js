import { KeepAwake, registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

class App extends React.Component {

  componentWillMount() {
    if (__DEV__) {  // eslint-disable-line no-undef
      KeepAwake.activate();
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>HEY</Text>
          <LoginScreen />
          <Text>WTF</Text>
      </View>
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

export default registerRootComponent(App);
