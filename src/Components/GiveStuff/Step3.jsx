import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Step1 extends Component {
  state = {
    isDown: true,
    lokalization: '- wybierz -',
    whomHelp: ['dzieciom'],
    foundation: ''
  };

  handleWhoHelp = (event) => {
    const helpList = this.state.whomHelp;
    const check = event.target.checked;
    const checkedStuff = event.target.value;

    if (check) {
      this.setState({
        whomHelp: [...this.state.whomHelp, checkedStuff]
      })
    } else {
      const index = helpList.indexOf(checkedStuff);
      if (index > -1) {
        helpList.splice(index, 1);
        this.setState({
          whomHelp: helpList
        })
      }
    }
  };

  handleSelect = e => {
    if(e.target.id.length > 0)
    this.setState({
      lokalization: e.target.id
    });

    this.handleArrow()
  };

  handleInputFoundation = e => {
    this.setState({
      foundation: e.target.value,
    });

    if(this.state.foundation.length > 0) {
      this.setState({
        whomHelp: []
      })
    }
  };

  handleArrow = () => {
    this.setState({
      isDown: !this.state.isDown
    })
  };

  render() {
    const { isDown, lokalization, whomHelp, foundation } = this.state;

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
                  {lokalization}
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>

            </div>
            {isDown
                ?
                ''
                :
                <div className="select city" style={{width: '300px', float: 'none'}}
                onClick={this.handleSelect}>
                  <span id="Poznań">Poznań</span>
                  <span id="Warszawa">Warszawa</span>
                  <span id="Kraków">Kraków</span>
                  <span id="Wrocłąw">Wrocłąw</span>
                  <span id="Katowice">Katowice</span>
                </div>}
            <section className="help-groups">
              <h5>Komu chcesz pomóc?</h5>
              <form className="form-buttons">
                <label>
                  <input
                      defaultChecked
                      onChange={this.handleWhoHelp}
                      type="checkbox"
                      value="dzieciom"/>
                  <span>dzieciom</span>
                </label>
                <label>
                  <input
                      onChange={this.handleWhoHelp}
                      type="checkbox"
                      value="samotnym matkom"/>
                  <span>samotnym matkom</span>
                </label>
                <label>
                  <input
                      onChange={this.handleWhoHelp}
                      type="checkbox"
                      value="bezdomnym"/>
                  <span>bezdomnym</span>
                </label>
                <label>
                  <input
                      onChange={this.handleWhoHelp}
                      type="checkbox"
                      value="niepełnosprawnym"/>
                  <span>niepełnosprawnym</span>
                </label>
                <label>
                  <input
                      onChange={this.handleWhoHelp}
                      type="checkbox"
                      value="osobom starszym"/>
                  <span>osobom starszym</span>
                </label>
              </form>
            </section>
            <section className='localization'>
              <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
              <input
                  onChange={this.handleInputFoundation}
                  type="text"
                  value={foundation}/>
            </section>

            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_2}>Wstecz</Link>
              </button>
              <button>
                Dalej
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step1;