import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../modules/Auth/SignInForm/SignInForm';
import * as selectors from '../modules/Auth/selectors';

class SignIn extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) {
      const { from } = this.props.location.state || {
        from: { pathname: '/menu' },
      };

      this.props.history.push(from);
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(SignIn);
