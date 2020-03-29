import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SignInLink } from "../SignIn";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
    <div className="sign-in-form" style={{marginTop: '50px'}}>
      <h1>Załóż konto</h1>
      <img src={require('../../assets/Decoration.svg')} alt="decoration"/>
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
    const { email, passwordOne, isAdmin } = this.state;
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
        email === '';

    return (
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="label-wrapper">
              <label>Imię
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                />
              </label>
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
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
              />
              </label>
              <label>Powtórz hasło
              <input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
              />
              </label>
              {/*<label>*/}
              {/*  Admin:*/}
              {/*  <input*/}
              {/*      name="isAdmin"*/}
              {/*      type="checkbox"*/}
              {/*      checked={isAdmin}*/}
              {/*      onChange={this.onChangeCheckbox}*/}
              {/*  />*/}
              {/*</label>*/}
            </div>
            {error && <p>{error.message}</p>}
            <div className="sing-in-buttons">
              <div className="up-link">
                <SignInLink />
              </div>
              <button disabled={isInvalid} type="submit">
                Załóż konto
              </button>
            </div>
          </form>
        </div>
    );
  }
}

const SignUpLink = () => (
   <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };