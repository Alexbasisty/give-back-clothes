import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import ImportantField from "./ImportantField";
import { StuffContext } from "./StuffContext";

const Step1 = () => {
  const context = useContext(StuffContext);

  const [state, setState] = useState({
    wantToGive: "ubrania, które nadają się do ponownego użycia"
  });

  const handleStuffSelect = event => {
    setState({
      wantToGive: event.target.value
    });
  };

  useEffect(() => {
    context.state.wantToGive && setState({
      wantToGive: context.state.wantToGive
    });
    // eslint-disable-next-line
  }, []);

    return (
        <>
          <ImportantField>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 1/4</h3>
            <h1>Zaznacz co chcesz oddać:</h1>
            <form>
              <label>
                <input
                    name="wantToGive"
                    onChange={handleStuffSelect}
                    checked={state.wantToGive === "ubrania, które nadają się do ponownego użycia"}
                    type="radio"
                    value="ubrania, które nadają się do ponownego użycia" />
                <span className="checkmark"/>
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input
                    name="wantToGive"
                    type="radio"
                    checked={state.wantToGive === "ubrania, do wyrzucenia"}
                    onChange={handleStuffSelect}
                    value="ubrania, do wyrzucenia"
                />
                <span className="checkmark"/>
                ubrania, do wyrzucenia
              </label>
              <label>
                <input
                    name="wantToGive"
                    type="radio"
                    checked={state.wantToGive === "zabawki"}
                    value="zabawki"
                    onChange={handleStuffSelect}
                />
                <span className="checkmark"/>
                zabawki
              </label>
              <label>
                <input
                    name="wantToGive"
                    type="radio"
                    checked={state.wantToGive === "książki"}
                    value="książki"
                    onChange={handleStuffSelect}
                />
                <span className="checkmark"/>
                książki
              </label>
              <label>
                <input
                    name="wantToGive"
                    type="radio"
                    checked={state.wantToGive === "inne"}
                    value="inne"
                    onChange={handleStuffSelect}
                />
                <span className="checkmark"/>
                Inne
              </label>
            </form>

            <div className="links-section">
              <button onClick={() => {context.setState(state)}}>
                <Link to={ROUTES.STEP_2}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
};



export default Step1;