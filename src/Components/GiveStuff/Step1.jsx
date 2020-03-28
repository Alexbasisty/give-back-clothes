import React from 'react';
import ImportantField from "./ImportantField";

const Step1 = () => (
    <>
      <ImportantField>
        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
      </ImportantField>
      <div className="steps-form-field">
        <h3>Krok 1/4</h3>
        <h1>Zaznacz co chcesz oddać:</h1>
        <form>
          <label>
          <input type="radio" checked="checked"/>
            <span className="checkmark" />
          ubrania, które nadają się do ponownego użycia
          </label>
          <label>
            <input type="radio" />
            <span className="checkmark" />
            ubrania, do wyrzucenia
          </label>
          <label>
            <input type="radio" />
            <span className="checkmark" />
            zabawki
          </label>
          <label>
            <input type="radio" />
            <span className="checkmark" />
            książki
          </label>
          <label>
            <input type="radio" />
            <span className="checkmark" />
            Inne
          </label>
        </form>
        <button>
          Dalej
        </button>
      </div>
    </>
);

export default Step1;