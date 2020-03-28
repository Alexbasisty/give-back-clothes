import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Step1 extends Component {
  state = {
    isDown: true,
  };

  handleArrow = () => {
    this.setState({
      isDown: !this.state.isDown
    })
  };

  render() {
    const { isDown } = this.state;

    return  (
        <>
          <ImportantField>
            Jeśli wiesz komu chcesz pomóc,
            możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje
            po ich lokalizacji bądź celu ich pomocy.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 3/4</h3>
            <h1>Lokalizacja:</h1>
            <div className="select-quo">
              <div className="select-title">
                <p
                    onClick={this.handleArrow}
                >
                  - wybierz -
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>

            </div>
            {isDown
                ?
                ''
                :
                <div className="select city" style={{width: '300px', float: 'none'}}>
                  <span id="1">Poznań</span>
                  <span id="2">Warszawa</span>
                  <span id="3">Kraków</span>
                  <span id="4">Wrocłąw</span>
                  <span id="5">Katowice</span>
                </div>}
            <section className="help-groups">
              <h5>Komu chcesz pomóc?</h5>
              <form className="form-buttons">
                <label>
                  <input
                      defaultChecked
                      type="checkbox" />
                  <span>dzieciom</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span>samotnym matkom</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span>bezdomnym</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span>niepełnosprawnym</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span>osobom starszym</span>
                </label>
              </form>
            </section>
            <section className='localization'>
              <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
              <input type="text"/>
            </section>

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