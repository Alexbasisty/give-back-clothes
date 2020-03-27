import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div className="sign-in-form">
      <h1>Zaloguj się</h1>
      <img src={require('../../assets/Decoration.svg')} alt="decoration"/>
      <SignInForm />
      <PasswordForgetLink />
    </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFromBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState( { error });
        });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="label-wrapper">
            <label>Email
              <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
              />
            </label>
            <label>Hasło
              <input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
              />
            </label>
            </div>
            {error && <p>{error.message}</p>}
            <div className="sing-in-buttons">
              <div className="up-link">
                <SignUpLink />
              </div>
              <button disabled={isInvalid} type="submit">
                Zaloguj się
              </button>
            </div>

          </form>
        </div>

    );
  }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFromBase);

const SignInLink = () => (
    <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
);

export default SignInPage;

export  { SignInLink };

export { SignInForm };