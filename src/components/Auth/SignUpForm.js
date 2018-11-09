import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import { register } from '../../state/auth';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0;
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

const Input = styled('input')`
  color: black;
  width: 500px;
  margin-bottom: 10px;
`;

const Button = styled('button')`
  background-color: #00baa1;
  border-color: #00baa1;
  border-radius: 5px;
  color: white;
  width: 100px;
  height: 50px;
`;

class SignUpForm extends Component {
  initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  state = this.initialState;

  onChange = name => e => {
    this.setState({ [name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.register(newUser);
  };
  render() {
    let textInput = null;
    return (
      <Form>
        <label name="firstName">First Name</label>
        <Input
          innerRef={input => (textInput = input)}
          onChange={this.onChange('firstName')}
        />
        <label name="lastName">Last Name</label>
        <Input
          innerRef={input => (textInput = input)}
          onChange={this.onChange('lastName')}
        />
        <label name="email">Email</label>
        <Input
          innerRef={input => (textInput = input)}
          onChange={this.onChange('email')}
        />
        <label name="password">Password</label>
        <Input
          innerRef={input => (textInput = input)}
          onChange={this.onChange('password')}
        />
        <Button type="submit" onClick={this.onSubmit}>
          Register
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { register },
)(SignUpForm);
