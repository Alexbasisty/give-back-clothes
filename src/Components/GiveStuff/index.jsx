import React, { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


import Contact from "../Home/Contact";
import GiveHeader from "./GiveHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import SummaryStepContext from "./SummaryStep";
import ThanksFull from "./ThanksFull";

import { StuffContext } from "./StuffContext";

const GiveStuff = () => {
  const [state, setState] = useState({});

  const value = {
    state: state,
    setState: (value) => setState(prevState => ({
      ...prevState,
      ...value
    }))
  };

  return (
      <StuffContext.Provider value={value}>
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
      </StuffContext.Provider>
  );
};

const GiveStuffLink = () => (
    <Link to={ROUTES.GIVE_STUFF}>Oddaj rzeczy</Link>
);

export { GiveStuffLink };

export  default GiveStuff;