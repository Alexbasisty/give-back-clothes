import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class HomeLinks extends Component{

  render() {
    return (
        <div className="links-container">
          <Link className="home-links" to={ROUTES.SIGN_IN}>ODDAJ RZECZY</Link>
          <Link className="home-links second-link" to={ROUTES.SIGN_IN}>ZORGANIZUJ ZBIÓRKĘ</Link>
        </div>
    );
  }
}

export default HomeLinks;