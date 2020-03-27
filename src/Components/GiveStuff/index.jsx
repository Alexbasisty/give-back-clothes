import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import Contact from "../Home/Contact";
import GiveHeader from "./GiveHeader";

const GiveStuff = () => (
    <>
      <GiveHeader />
      <Contact />
    </>
);

const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export { GiveStuffLink };

export  default GiveStuff;