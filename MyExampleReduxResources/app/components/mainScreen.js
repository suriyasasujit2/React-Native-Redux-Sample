import React, {Component} from 'react';
import {
    StyleSheet, 
    Button, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as MyAppActions from '../actions';
class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    goToLoginPage() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View>
                <Text>
                   Press to login page !! 
                </Text>
                <Button
                    onPress={ () => this.goToLoginPage()}
                    title="Go To Login Page"
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
)(MainScreen);