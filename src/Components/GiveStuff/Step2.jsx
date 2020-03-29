import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Step2 extends Component {
  state = {
    isDown: true,
    bagsNumber: '- wybierz -',
  };

  handleSelect = e => {
    if(e.target.id.length > 0) {
      this.setState({
        bagsNumber: e.target.id
      });
    } else {
      this.setState({
        bagsNumber: '- wybierz -'
      });
    }


    this.handleArrow()
  };

  handleArrow = () => {
    this.setState({
      isDown: !this.state.isDown
    })
  };

  render() {
    const { isDown, bagsNumber } = this.state;
    return (
        <>
          <ImportantField>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a>TUTAJ</a>.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 2/4</h3>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <div className="select-quo">
              <div className="select-title">
                <h4>Liczba 60l worków:</h4>
                <p
                  onClick={this.handleArrow}
                >
                  {bagsNumber}
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>
              {isDown
                  ?
                  ''
                  :
                  <div className="select" onClick={this.handleSelect}>
                    <span id="1">1</span>
                    <span id="2">2</span>
                    <span id="3">3</span>
                    <span id="4">4</span>
                    <span id="5">5</span>
                  </div>}
            </div>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_1}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_3}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step2;