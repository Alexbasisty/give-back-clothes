import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from '../Session';

const GiveStuffButton = () => (
    <AuthUserContext.Consumer>
      {authUser =>
          authUser ? (
              <GiveStuffButtonAuth authUser={authUser} />
          ) : (
              <GiveStuffButtonNonAuth />
          )
      }
    </AuthUserContext.Consumer>
);

const GiveStuffButtonNonAuth = () => {

    return (
          <Link className="home-links" to={ROUTES.SIGN_IN}>ODDAJ RZECZY</Link>
    );
};

const GiveStuffButtonAuth = () => {

  return (
      <Link className="home-links" to={ROUTES.GIVE_STUFF}>ODDAJ RZECZY</Link>
  );
};



export default GiveStuffButton;