import React, { useState, useContext, useEffect } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { StuffContext } from "./StuffContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step4 = () => {
  const context = useContext(StuffContext);

  const [state, setState] = useState({
    startDate: new Date(),
    street: '',
    streetError: '',
    city: '',
    cityError: '',
    postCode: '',
    postCodeError: '',
    phoneNumber: '',
    phoneNumberError: '',
    hour: '',
    hourError: '',
    message: ''
  });

  useEffect(() => {
    console.log(context);
    setState(prevState => ({
      ...prevState,
      startDate: context.state.startDate,
      street: context.state.street,
      city: context.state.city,
      postCode: context.state.postCode,
      phoneNumber: context.state?.phoneNumber,
      hour: context.state?.hour,
      message: context.state?.message
    }));
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    validate();
  };

  const validate = () => {
    let isValid = true;
    if (state.street?.length < 1) {
      isValid = false;
      setState(prevState => ({
        ...prevState,
        streetError: 'Ulica:  napisz conajmniej 2 znaki'
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        streetError: ''
      }));
    }
    if (state.city?.length < 1) {
      isValid = false;
      setState(prevState => ({
        ...prevState,
        cityError: 'Miasto:  napisz conajmniej 2 znaki'
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        cityError: ''
      }));
    }
    if (!/\d{2}-\d{3}/i.test(state?.postCode)) {
      isValid = false;
      setState(prevState => ({
        ...prevState,
        postCodeError: 'Kod pocztowy:  format: **-***'
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        postCodeError: ''
      }));
    }
    if (state.phoneNumber?.length !== 9) {
      isValid = false;
      setState(prevState => ({
        ...prevState,
        phoneNumberError: 'Telefon:  musi mieć 9 znaków'
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        phoneNumberError: ''
      }));
    }
    if (!/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(state?.hour)) {
      isValid = false;
      setState(prevState => ({
        ...prevState,
        setHourError: 'Godzina:  format --:--'
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        setHourError: ''
      }));
    }
    return isValid;
  };

  const handleDateChoose = date => {
    setState({
      ...state,
      startDate: date
    });
  };

  useEffect(() => {
    context.setState(state);
  }, [state]);

  const handleSubmit = () => {
    context.setState(state)
  };

    return (
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
                      <input
                          onChange={handleChange}
                          value={state.street}
                          name="street"
                          type="text" />
                    </label>
                    <label>Miasto
                      <input
                          onChange={handleChange}
                          value={state.city}
                          name="city"
                          type="text" />
                    </label>
                    <label>Kod pocztowy
                      <input
                          onChange={handleChange}
                          value={state.postCode}
                          name="postCode"
                          type="text" />
                    </label>
                    <label>Numer telefonu
                      <input
                          onChange={handleChange}
                          value={state.phoneNumber}
                          name="phoneNumber"
                          type="text" />
                    </label>
                  </form>
                <div className="errors" style={{display: 'flex', flexDirection: 'column'}}>
                  <span>{state.streetError}</span>
                  <span>{state.cityError}</span>
                  <span>{state.postCodeError}</span>
                  <span>{state.phoneNumberError}</span>
                </div>
              </div>
              <div className="date">
                <h5>Termin odbioru:</h5>
                <form>
                  <label>Data
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      showTimeSelectnpm
                      selected={state.startDate}
                      onChange={handleDateChoose}
                    />
                  </label>
                  <label>Godzina
                    <input
                        onChange={handleChange}
                        value={state.hour}
                        type="text"
                        name="hour"/>
                  </label>
                  <label>Uwagi dla kurriera
                    <input
                        onChange={handleChange}
                        value={state.message}
                        name="message"/>
                  </label>
                </form>
                <div className="errors" style={{paddingTop: '20px'}}>
                  <span style={{fontSize: '2.2rem'}}>{state.hourError}</span>
                </div>
              </div>
            </section>
            <div className="links-section">
              <button onClick={handleSubmit}>
                <Link to={ROUTES.STEP_3}>Wstecz</Link>
              </button>
              <button onClick={handleSubmit}>
                <Link to={ROUTES.SUMMARY}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
};

export default Step4;