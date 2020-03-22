import React from 'react';
import HomeLinks from "./homelinks";

const HomeHeader = () => (
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
        <div className="home-links">
          <HomeLinks />
        </div>
      </div>
    </div>
);

export default HomeHeader;