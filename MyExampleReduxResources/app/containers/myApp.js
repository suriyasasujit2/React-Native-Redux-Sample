import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import MainScreen from '../components/mainScreen'; 
import { Root } from '../configs/router';
import * as MyAppActions from '../actions';
import { connect } from 'react-redux';

class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { myApps, actions } = this.props;
        console.log("this.props", this.props);
        return ( <Root 
                myApps = { myApps }
                actions = { actions }
            />
        );
    }
}

export default connect(state => ({
        myApps: state.myApps
    }),
    (dispatch) => ({
        actions: bindActionCreators(MyAppActions, dispatch)
    })
)(MyApp);