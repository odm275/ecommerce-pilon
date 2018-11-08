import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

class SignInForm extends Component {
  initialState = {
    email: '',
    password: '',
  };
  state = initialState;

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signIn(newUser);
  };
  render() {
    return (
      <div>
        <h1>Sign In here</h1>
      </div>
    );
  }
}

export default SignInForm;
