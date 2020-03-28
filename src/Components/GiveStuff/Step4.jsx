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
        <div className="links-section">
          <button>
            <Link to={ROUTES.STEP_2}>Wstecz</Link>
          </button>
        </div>
      </div>
    </>
);

export default Step1;