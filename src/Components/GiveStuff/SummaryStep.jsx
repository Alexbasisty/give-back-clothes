import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class SummaryStep extends Component {

  render() {
    return (
        <>
          <div className="step1-form">
            <h1>Podsumowanie Twojej darowizny</h1>
            <h2>Oddajesz:</h2>
            <div className="summary">
              <img src={require('../../assets/Icon-1.svg')} alt="t-shirt" />
              <small>4 worki, ubrania w dobrym stanie, dzieciom</small>
            </div>
            <div className="summary">
              <img src={require('../../assets/Icon-4.svg')} alt="circle-arrows" />
              <small>dla lokalizacji: Warszawa</small>
            </div>
            <section id="pick-up-datas">
              <div className="address">
                <h5>Adres odbioru:</h5>
                <div className="street">
                  <p>Ulica</p>
                  <span>Prosta 51</span>
                </div>
                <div className="town">
                  <p>Miasto</p>
                  <span>Warszawa</span>
                </div>
                <div className="post-code">
                  <p>Kod pocztowy</p>
                  <span>90-209</span>
                </div>
                <div className="street">
                  <p>Numer telefonu</p>
                  <span>473 839 483</span>
                </div>
              </div>
              <div className="date-data">
                <h5>Termin odbioru:</h5>
                <div className="date">
                  <p>Data</p>
                  <span>17.10.2019</span>
                </div>
                <div className="hour">
                  <p>Godzina</p>
                  <span>17:30</span>
                </div>
                <div className="notes-for-courier">
                  <p>Uwagi dla kuriera</p>
                  <span>Prosta 51</span>
                </div>
              </div>
            </section>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_4}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.THANKS}>Potwierdzam</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default SummaryStep;