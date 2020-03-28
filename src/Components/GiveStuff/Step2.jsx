import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Step1 extends Component {
  state = {
    isDown: true
  };

  handleArrow = () => {
    this.setState({
      isDown: !this.state.isDown
    })
  };

  render() {
    const { isDown } = this.state;
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
                <h3>Liczba 60l worków:</h3>
                <p
                  onClick={this.handleArrow}
                >
                  - wybierz -
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>
              {isDown
                  ?
                  ''
                  :
                  <div className="select">
                    <span id="1">1</span>
                    <span id="2">2</span>
                    <span id="3">3</span>
                    <span id="4">4</span>
                    <span id="5">5</span>
                  </div>}
            </div>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_2}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_2}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step1;