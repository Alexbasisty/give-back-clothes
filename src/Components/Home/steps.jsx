import React, { Component } from 'react';
import GiveStuffButton from "./giveStuffButton";

class SimpleSteps extends Component {

  render() {
    return (
        <div className="steps-wrapper">
          <GiveStuffButton />
        </div>
    );
  }
}

export default SimpleSteps;