import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import ImportantField from "./ImportantField";
import { StuffContext } from "./StuffContext";

const Step1 = () => {
  const context = useContext(StuffContext);

  const [state, setState] = useState({
    wantToGive: ['ubrania, które nadają się do ponownego użycia '],
  });


  // const saveState = () => {
  //   localStorage.setItem('user_staff', JSON.stringify(state.wantToGive));
  // };

  const handleStuffSelect = (event) => {
    const giveList = [...state.wantToGive];
    const check = event.target.checked;
    const checkedStuff = event.target.value;

    if(check) {
      setState(prevState => ({
        ...prevState,
        wantToGive: [...state.wantToGive, checkedStuff]
      }))
    } else {
      const index = giveList.indexOf(checkedStuff);
      if(index > -1) {
        giveList.splice(index, 1);
        setState(prevState => ({
          ...prevState,
          wantToGive: giveList
        }))
      }
    }

    context.setState(state);
  };

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
                    defaultChecked
                    onChange={handleStuffSelect}
                    type="checkbox"
                    value="ubrania, które nadają się do ponownego użycia "/>
                <span className="checkmark"/>
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input type="checkbox"
                       // checked={data.includes("ubrania, do wyrzucenia")}
                       onChange={handleStuffSelect}
                       value="ubrania, do wyrzucenia "
                />
                <span className="checkmark"/>
                ubrania, do wyrzucenia
              </label>
              <label>
                <input type="checkbox"
                       value="zabawki "
                       onChange={handleStuffSelect}
                />
                <span className="checkmark"/>
                zabawki
              </label>
              <label>
                <input type="checkbox"
                       value="książki "
                       onChange={handleStuffSelect}
                />
                <span className="checkmark"/>
                książki
              </label>
              <label>
                <input type="checkbox"
                       value="inne "
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