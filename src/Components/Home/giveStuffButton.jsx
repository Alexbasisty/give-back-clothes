import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class GiveStuffButton extends Component{

  render() {
    return (
          <Link className="home-links" to={ROUTES.SIGN_IN}>ODDAJ RZECZY</Link>
    );
  }
}

export default GiveStuffButton;