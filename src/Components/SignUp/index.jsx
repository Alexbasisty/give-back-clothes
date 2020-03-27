import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SignInLink } from "../SignIn";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
    <div className="sign-in-form">
      <h1>SignUp</h1>
      <SignUpForm />
    </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  state = {...INITIAL_STATE};

  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          return this.props.firebase
              .user(authUser.user.uid)
              .set({
                username,
                email,
                roles,
              });
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
          this.setState({ error });
        });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;
    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
    return (
        <form onSubmit={this.onSubmit}>
          <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
          />
          <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
          />
          <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
          />
          <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
          />
          <label>
            Admin:
            <input
                name="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={this.onChangeCheckbox}
            />
          </label>
          <button disabled={isInvalid} type="submit">Sign Up</button>
          {error && <p>{error.message}</p>}
        </form>
    );
  }
}

const SignUpLink = () => (
   <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };