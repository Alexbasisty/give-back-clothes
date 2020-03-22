import React from 'react';

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <p onClick={firebase.doSignOut} style={{margin: '0 auto'}}>
    Sign Out
  </p>
);

export default withFirebase(SignOutButton);