import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../modules/Auth/selectors';
import SignUpForm from '../modules/Auth/SignUpForm/SignUpForm';

class SignUp extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) {
      this.props.history.push(`/menu`);
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your acccount for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(SignUp);

