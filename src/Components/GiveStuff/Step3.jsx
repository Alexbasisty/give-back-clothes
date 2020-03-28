import React from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Step1 = () => (
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