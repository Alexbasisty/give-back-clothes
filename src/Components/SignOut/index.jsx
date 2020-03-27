import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => {

  return (
        <Link to={ROUTES.SIGN_OUT} onClick={firebase.doSignOut} style={{margin: '0 auto'}}>
          Wyloguj
        </Link>
  )
};

export default withFirebase(SignOutButton);