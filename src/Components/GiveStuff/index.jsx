import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


import Contact from "../Home/Contact";
import GiveHeader from "./GiveHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import SummaryStepContext from "./SummaryStep";
import ThanksFull from "./ThanksFull";

export const Stuff = React.createContext({});


const GiveStuff = () => {

  return (
      <Stuff.Provider>
      <Router>
        <GiveHeader />
        <Switch>
          <Route exact path={ROUTES.STEP_1} component={Step1} />
          <Route path={ROUTES.STEP_2} component={Step2} />
          <Route path={ROUTES.STEP_3} component={Step3} />
          <Route path={ROUTES.STEP_4} component={Step4} />
          <Route path={ROUTES.SUMMARY} component={SummaryStepContext} />
          <Route path={ROUTES.THANKS} component={ThanksFull} />
        </Switch>
        <Contact />
      </Router>
      </Stuff.Provider>
  );
};

const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export { GiveStuffLink };

export  default GiveStuff;