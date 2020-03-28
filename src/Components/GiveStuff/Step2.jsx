import React from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Step1 = () => (
    <>
      <ImportantField>
        Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a>TUTAJ</a>.
      </ImportantField>
      <div className="step1-form">
        <h3>Krok 2/4</h3>
        <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
        <div className="select-quo">
          <h3>Liczba 60l worków:</h3>
          <select>
            <option>- wybierz -</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
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

export default Step1;