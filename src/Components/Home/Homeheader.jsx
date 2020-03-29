import React from 'react';
import Homelinks from "./Homelinks";

const Homeheader = () => (
    <div className="home-header">
      <div className="home-hero">
        <img className="home-image" src={require('../../assets/Home-Hero-Image.jpg')} alt="home-staff" />
      </div>
      <div className="home-title">
        <div className="text">
          <p style={{margin: 0}}>Zacznij pomagać!</p>
          <p style={{margin: 0}}>Oddaj niechciane rzeczy w zaufane ręce</p>
        </div>
        <div className="decoration" />
        <Homelinks />
      </div>
    </div>
);

export default Homeheader;