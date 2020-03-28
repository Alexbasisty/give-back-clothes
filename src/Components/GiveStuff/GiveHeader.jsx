import React from 'react';

const GiveHeader = () => (
    <div className="home-header give-stuff-header">
      <div className="home-hero" />
      <div className="home-title" style={{width: '760px'}}>
        <div className="text">
          <p style={{margin: 0, width: '602px'}}>Oddaj rzeczy, których już nie chcesz <strong>potrzebującym</strong></p>
        </div>
        <div className="decoration" />
        <h2>Wystarczą 4 proste kroki:</h2>
        <div className='header-steps'>
          <div>
            <h4>1</h4>
            <p>Wybierz rzeczy</p>
          </div>
          <div>
            <h4>2</h4>
            <p>Spakuj je w worki</p>
          </div>
          <div>
            <h4>3</h4>
            <p>Wybierz fundację</p>
          </div>
          <div>
            <h4>4</h4>
            <p>Zamów kuriera</p>
          </div>
        </div>
      </div>
    </div>
);

export default GiveHeader;