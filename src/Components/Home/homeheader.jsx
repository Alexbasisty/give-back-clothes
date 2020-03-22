import React from 'react';

const HomeHeader = () => (
    <div className="home-header">
      <div className="home-hero">
        <img className="home-image" src={require('../../assets/Home-Hero-Image.jpg')} alt="home-staff" />
      </div>
      <div className="home-title">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
      </div>
    </div>
);

export default HomeHeader;