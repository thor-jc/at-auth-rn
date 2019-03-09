import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { connect } from 'react-redux';
//import firebase from 'firebase';
import { Card, Input, Button } from 'react-native-elements';

import { Spinner } from '../common/Spinner';
import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS,
    USER_NAME, PASSWORD } from './redux/auth-action';

class LoginForm extends Component {

  onButtonPress = () => {
    //const { username, password } = this.props.auth;

    this.props.loginEvent(USER_LOGIN);
    this.props.loadingApp(true);

    // firebase.auth().signInWithEmailAndPassword(username, password)
    //   .then(this.onLoginSuccess)
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(username, password)
    //       .then(this.onLoginSuccess)
    //       .catch(this.onLoginFail);
    //   });
  }

  onLoginFail = () => {
    this.props.loginEvent(USER_LOGIN_FAILED, { error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess = () => {
    this.props.loginEvent(USER_LOGIN_SUCCESS, {
      username: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton = () => {
    if (this.props.auth.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal>
          <Card>
              <Input
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                placeholder="user@gmail.com"
                label="Email"
                value={this.props.auth.username}
                onChangeText={(text) => this.props.handleFieldChange({ type: USER_NAME, text })}
              />
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.props.auth.password}
                onChangeText={(text) => this.props.handleFieldChange({ type: PASSWORD, text })}
              />
            <Text style={styles.errorTextStyle}>
              {this.props.auth.error}
            </Text>
            {this.renderButton()}
          </Card>
        </Modal>
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps)(LoginForm);
