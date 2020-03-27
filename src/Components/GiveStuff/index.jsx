import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';


const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export  default GiveStuffLink ;