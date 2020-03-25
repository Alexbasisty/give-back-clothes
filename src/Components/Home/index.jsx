import React from 'react';
import Homeheader from "./Homeheader";
import Threecolumns from "./Threecolumns";
import SimpleSteps from "../SimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

const HomePage = () => (
    <>
      <Homeheader />
      <Threecolumns/>
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
);

export default HomePage;