import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

const login = require('../components/auth');

class AuthScreen extends React.Component {

  determineView = () => {
    console.log('inside determineView()');

    if (this.view) {
      return this.view;
    }

    const LoadableLoginForm = Loadable({
        loader: () => login,
        loading: () => <Text>LOADING - make this look better later.</Text>,
    });

    this.view = <LoadableLoginForm />;
    return this.view;
  }

  //this.props.appLoading(true);

  render() {
    return (
      <View style={styles.container}>
        <Text> KILLER LOGIN {this.props.auth ? 'true' : 'false'}</Text>
        { this.determineView() }
      </View>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, null)(AuthScreen);
