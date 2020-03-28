import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


import Contact from "../Home/Contact";
import GiveHeader from "./GiveHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


const GiveStuff = () => (
    <>
      <GiveHeader />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Contact />
    </>
);

const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export { GiveStuffLink };

export  default GiveStuff;