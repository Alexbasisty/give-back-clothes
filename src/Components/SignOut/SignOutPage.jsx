import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import React from "react";

const SignOutPage = () => (
    <div className="sign-in-form">
      <h1 style={{width: '450px', textAlign: 'center'}}>Wylogowanie nastąpiło pomyślnie!</h1>
      <img src={require('../../assets/Decoration.svg')} alt="decoration"/>
      <Link className="nav-link start" to={ROUTES.HOME}
      style={{
        border: '1px solid black',
        padding: '13px 17px'
      }}>Strona główna</Link>
    </div>
);

export default SignOutPage;