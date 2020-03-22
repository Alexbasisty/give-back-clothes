import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import GiveStuffButton from "./giveStuffButton";

class HomeLinks extends Component{

  render() {
    return (
        <div className="links-container">
          <GiveStuffButton />
          <Link className="home-links second-link" to={ROUTES.SIGN_IN}>ZORGANIZUJ ZBIÓRKĘ</Link>
        </div>
    );
  }
}

export default HomeLinks;