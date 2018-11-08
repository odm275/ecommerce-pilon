import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { register } from '../../state/auth';

/*
const Input = styled.input.attrs({
  type: 'text',
  size: props => (props.small ? 5 : undefined),
})`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`
*/
class SignUpForm extends Component {
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
  };
  render() {
    return (
      <form>
        <input type="" />
        <input />
        <input />
        <input />
      </form>
    );
  }
}

export default SignUpForm;
