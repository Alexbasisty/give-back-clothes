import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import ImportantField from "./ImportantField";

class Step1 extends Component {
  state = {
    wantToGive: 'ubrania, które nadają się do ponownego użycia',
  };

  handleSubmit = (event) => {
    this.setState({
      wantToGive: event.target.value
    });
    console.log(this.state.wantToGive);
  };

  render() {
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
                    type="checkbox"
                    value="ubrania, które nadają się do ponownego użycia"/>
                <span className="checkmark"/>
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input type="checkbox"
                       onChange={this.handleCheck}
                       value="ubrania, do wyrzucenia"
                />
                <span className="checkmark"/>
                ubrania, do wyrzucenia
              </label>
              <label>
                <input type="checkbox"
                       value="zabawki"
                       onChange={this.handleCheck}
                />
                <span className="checkmark"/>
                zabawki
              </label>
              <label>
                <input type="checkbox"
                       value="książki"
                       onChange={this.handleCheck}
                />
                <span className="checkmark"/>
                książki
              </label>
              <label>
                <input type="checkbox"
                       value="inne"
                       onChange={this.handleCheck}
                />
                <span className="checkmark"/>
                Inne
              </label>
            </form>

            <div className="links-section">
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