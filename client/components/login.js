import React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
//------------------------------------------------------------------
import { auth } from '../store/user';
//------------------------------------------------------------------
const LOGIN = 'login';
//------------------------------------------------------------------
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: false,
    };
    this.submitLogin = this.submitLogin.bind(this);
  }
  //------------------------------------------------------------------
  async submitLogin() {
    await this.props.login(this.state.email, this.state.password, LOGIN);
    if (this.props.user.id) {
      this.props.navigate('MapScreen');
    } else {
      this.setState({
        error: true,
      });
    }
  }
  //------------------------------------------------------------------
  render() {
    return (
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 27 }}>LOGIN</Text>
        <TextInput
          placeholder="Email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          value={this.state.password}
          autoCapitalize="none"
        />
        <View style={{ margin: 7 }} />
        <Text>{this.state.error ? 'Incorrect username or password' : ''}</Text>
        <Button title="Submit" onPress={this.submitLogin} />
      </View>
    );
  }
}
//------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessageText: {
    textDecorationColor: 'red',
  },
});
//------------------------------------------------------------------

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    navigate: ownProps.navigation.navigate,
  };
};
//------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, method) => dispatch(auth(email, password, method)),
  };
};
//------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Login);
