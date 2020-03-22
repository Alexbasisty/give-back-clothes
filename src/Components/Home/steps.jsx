import React, { Component } from 'react';
import GiveStuffButton from "./giveStuffButton";

class SimpleSteps extends Component {

  render() {
    return (
        <div className="steps-wrapper">
          <h2>Wystarczą 4 proste kroki</h2>
          <img src={require('../../assets/Decoration.svg')} alt="decoration" />
          <GiveStuffButton />
        </div>
    );
  }
}

export default SimpleSteps;