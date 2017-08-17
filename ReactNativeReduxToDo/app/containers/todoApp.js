'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import MainSection from '../components/mainSection';
import * as TodoActions from '../actions';
import { connect } from 'react-redux';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, actions } = this.props;
    console.log("this.props",this.props);
    return (
      <MainSection
        todos={todos} actions={actions} />
    );
  }
}

export default connect(state => ({
    todos: state.todos
  }),
  (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)(TodoApp);
