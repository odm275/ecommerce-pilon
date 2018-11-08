import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { register } from '../../state/auth';

class SignUp extends Component {
  initialState = {
    name: '',
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
    this.props.register(newUser);
  };
  render() {
    return (
      <div>
        <h1>Sign up here</h1>
      </div>
    );
  }
}

export default SignUp;
