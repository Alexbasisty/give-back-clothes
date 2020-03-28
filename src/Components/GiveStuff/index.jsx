import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import Contact from "../Home/Contact";
import GiveHeader from "./GiveHeader";
import ImportantField from "./ImportantField";
import Step1 from "./Step1";

const GiveStuff = () => (
    <>
      <GiveHeader />
      <ImportantField />
      <Step1 />
      <Contact />
    </>
);

const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export { GiveStuffLink };

export  default GiveStuff;