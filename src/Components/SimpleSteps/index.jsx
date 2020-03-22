import React, { Component } from 'react';
import GiveStuffButton from "../Home/giveStuffButton";
import ChooseClothes from "./chooseClothes";
import OrderKurier from "./orderKurier";
import PackThem from "./packThem";
import WhomYouHelp from "./whomYouHelp";

class SimpleSteps extends Component {

  render() {
    return (
        <div className="steps-wrapper">
          <h2>Wystarczą 4 proste kroki</h2>
          <img src={require('../../assets/Decoration.svg')} alt="decoration" />
          <div className="steps-description">
            <ChooseClothes />
            <PackThem />
            <WhomYouHelp />
            <OrderKurier />
          </div>
          <GiveStuffButton />
        </div>
    );
  }
}

export default SimpleSteps;