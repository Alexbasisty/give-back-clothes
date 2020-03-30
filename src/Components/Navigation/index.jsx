import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import { Link as ScrollLink} from 'react-scroll';

import SignOutButton from "../SignOut";
import { GiveStuffLink } from "../GiveStuff";
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
    <div className="container">
      <ul className="login-buttons">
        <li className="user-name">
          Cześć {authUser.email}
        </li>
        <li className="nav-link sign-up" style={{color: '#3C3C3C'}}>
          <GiveStuffLink />
        </li>
        <li className="sign-out" style={{border: 'none'}}>
          <SignOutButton />
        </li>
      </ul>
      <ul className="navbar">
        <li>
          <Link className="nav-link start" to={ROUTES.HOME}>Start</Link>
        </li>
        <li>
          <ScrollLink className="nav-link" to='what-matter' style={{paddingLeft: '-2rem'}}>O co chodzi?</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='aboutUs'>O nas</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='foundations'>Fundacja i organizacje</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='contact'>Kontakt</ScrollLink>
        </li>
        <li className="nav-link">
          <Link to={ROUTES.ACCOUNT}>Profil</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li className="nav-link">
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
      </ul>
    </div>
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
          <ScrollLink className="nav-link" to='what-matter' style={{paddingLeft: '-2rem'}}>O co chodzi?</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='aboutUs'>O nas</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='foundations'>Fundacja i organizacje</ScrollLink>
        </li>
        <li>
          <ScrollLink className="nav-link" to='contact'>Kontakt</ScrollLink>
        </li>
      </ul>
    </div>

);

export default Navigation;