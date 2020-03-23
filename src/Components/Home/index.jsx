import React from 'react';
import Homeheader from "./Homeheader";
import Threecolumns from "./Threecolumns";
import SimpleSteps from "../SimpleSteps";
import AboutUs from "./AboutUs";

const HomePage = () => (
    <>
      <Homeheader />
      <Threecolumns/>
      <SimpleSteps />
      <AboutUs />
    </>
);

export default HomePage;