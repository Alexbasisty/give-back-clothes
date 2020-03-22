import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';

import SignOutButton from "../SignOut";
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
    <AuthUserContext.Consumer>
      {authUser =>
          authUser ? (
              <NavigationAuth authUser={authUser} />
          ) : (
              <NavigationNonAuth />
          )
      }
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
    <ul className="navbar">
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Start</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </ul>
);

const NavigationNonAuth = () => (
    <div className="container">
      <ul className="login-buttons">
        <li>
          <Link className="nav-link" to={ROUTES.SIGN_IN}>Zaloguj</Link>
        </li>
        <li>
          <Link className="nav-link sign-up" to={ROUTES.SIGN_UP}>Załóż konto</Link>
        </li>
      </ul>
      <ul className="navbar">
        <li>
          <Link className="nav-link start" to={ROUTES.HOME}>Start</Link>
        </li>
        <li>
          <Link className="nav-link" to={ROUTES.HOME} style={{paddingLeft: '-2rem'}}>O co chodzi?</Link>
        </li>
        <li>
          <Link className="nav-link" to={ROUTES.HOME}>O nas</Link>
        </li>
        <li>
          <Link className="nav-link" to={ROUTES.HOME}>Fundacja i organizacje</Link>
        </li>
        <li>
          <Link className="nav-link" to={ROUTES.HOME}>Kontakt</Link>
        </li>
      </ul>
    </div>

);

export default Navigation;