import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AuthApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22235630',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
