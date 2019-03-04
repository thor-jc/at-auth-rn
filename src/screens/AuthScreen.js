import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../components/auth/LoginForm';
import * as actions from '../actions';

class AuthScreen extends React.Component {

  determineView = () => {
    console.log('inside determineView()');
    return (<LoginForm />);
  }

  //this.props.appLoading(true);

  render() {
    return (
      <View style={styles.container}>
        <Text> KILLER LOGIN {this.props.auth.isLoading ? 'true' : 'false'}</Text>
        { this.determineView() }
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, actions)(AuthScreen);
