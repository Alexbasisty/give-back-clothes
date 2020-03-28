import React from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Step1 = () => (
    <>
      <ImportantField>
        Podaj adres oraz termin odbioru rzeczy.
      </ImportantField>
      <div className="step1-form">
        <h3>Krok 4/4</h3>
        <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>

        <section id="pick-up-datas">
          <div className="address">
            <h5>Adres odbioru:</h5>
            <form>
              <label>Ulica
              <input type="text" />
              </label>
              <label>Miasto
                <input type="text" />
              </label>
              <label>Kod pocztowy
                <input type="number" />
              </label>
              <label>Numer telefonu
                <input type="number" />
              </label>
            </form>
          </div>
          <div className="date">
            <h5>Termin odbioru:</h5>
            <form>
              <label>Data
                <input type="text" />
              </label>
              <label>Godzina
                <input type="number" />
              </label>
              <label>Uwagi dla kurriera
                <textarea />
              </label>
            </form>
          </div>
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

export default Step1;