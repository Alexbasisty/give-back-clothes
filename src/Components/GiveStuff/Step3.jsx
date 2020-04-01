import React, { useState, useContext, useEffect } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Step3 = () => {
  // state = {
  //   isDown: true,
  //   lokalization: '- wybierz -',
  //   whomHelp: ['dzieciom '],
  //   foundation: ''
  // };

  // saveState = () => {
  //   localStorage.setItem('lokalization', JSON.stringify(this.state.lokalization));
  //   localStorage.setItem('whomHelp', JSON.stringify(this.state.whomHelp));
  //   localStorage.setItem('foundation', JSON.stringify(this.state.foundation));
  // };

  // componentDidMount() {
  //   if ((localStorage.getItem('lokalization') !== null)) {
  //     const lokalization = JSON.parse(localStorage.getItem('lokalization'));
  //
  //     this.setState({
  //       lokalization
  //     })
  //   }
  //   if((localStorage.getItem('foundation') !== null)) {
  //     const foundation = JSON.parse(localStorage.getItem('foundation'));
  //     this.setState({
  //       foundation
  //     })
  //   }
  // }

  const handleWhoHelp = (event) => {
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
    this.saveState();
  };

  const handleSelect = e => {
    if (e.target.id.length > 0) {
      this.setState({
        lokalization: e.target.id
      });
      this.saveState();
    } else {
      this.setState({
        lokalization: '- wybierz -'
      });
      this.saveState();
    }
    this.handleArrow()
  };

  const handleInputFoundation = e => {
    this.setState({
      foundation: e.target.value,
    });

    if(this.state.foundation.length > 1) {
      this.setState({
        whomHelp: []
      })
    }
  };

  const handleArrow = () => {
    this.setState({
      isDown: !this.state.isDown
    })
  };

    const { isDown, lokalization, foundation } = this.state;

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
                    onClick={handleArrow}
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
                onClick={handleSelect}>
                  <span id="Poznań">Poznań</span>
                  <span id="Warszawa">Warszawa</span>
                  <span id="Kraków">Kraków</span>
                  <span id="Wrocłąw">Wrocław</span>
                  <span id="Katowice">Katowice</span>
                </div>}
            <section className="help-groups">
              <h5>Komu chcesz pomóc?</h5>
              <form className="form-buttons">
                <label>
                  <input
                      defaultChecked
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="dzieciom "/>
                  <span>dzieciom</span>
                </label>
                <label>
                  <input
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="samotnym matkom "/>
                  <span>samotnym matkom</span>
                </label>
                <label>
                  <input
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="bezdomnym "/>
                  <span>bezdomnym</span>
                </label>
                <label>
                  <input
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="niepełnosprawnym "/>
                  <span>niepełnosprawnym</span>
                </label>
                <label>
                  <input
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="osobom starszym "/>
                  <span>osobom starszym</span>
                </label>
              </form>
            </section>
            <section className='localization'>
              <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
              <input
                  onChange={handleInputFoundation}
                  type="text"
                  value={foundation}/>
            </section>

            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_2}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_4}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
};

export default Step3;