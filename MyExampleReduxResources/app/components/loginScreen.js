import React, {Component} from 'react';
import {
    StyleSheet, 
    Button, 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as MyAppActions from '../actions';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {username : 'sk@manaosoftware.com' ,password : 'Manao100%'};
        console.log('Login Screen Props', this.props);
        console.log('Login Screen state', this.state);
    }

    login() {
        console.log("login() component state  : ", this.state)
        this.props.actions.login(this.state)
    }

    render() {
        return (
            <View>
                <Text>
                   Enter Username and Password
                </Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username : text })}
                />
                <TextInput
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password : text })}
                />
                <Button
                    onPress={ () => this.login()}
                    title="Login"
                />
            </View>
        );
    }
}
export default connect(
    state => ({
        myApps: state.myApps
    }),
    (dispatch) => ({
        actions: bindActionCreators(MyAppActions, dispatch)
    })
)(LoginScreen);