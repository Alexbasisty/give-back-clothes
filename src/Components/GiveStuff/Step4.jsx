import React, { useState, useContext, useEffect } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { StuffContext } from "./StuffContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step4 = () => {
  const context = useContext(StuffContext);

  const [contact, setState] = useState({
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

  const [disabled, setAnable] = useState(false);

  useEffect(() => {
    context.state.startDate &&  context.state.street &&
    context.state.city && context.state.postCode &&
    context.state.phoneNumber &&
    context.state.hour &&
    setState(prevState => ({
      ...prevState,
      startDate: context.state.startDate,
      street: context.state.street,
      city: context.state.city,
      postCode: context.state.postCode,
      phoneNumber: context.state.phoneNumber,
      hour: context.state.hour,
      message: context.state.message
    }));

    validate();
    // eslint-disable-next-line
  }, [context.state.city, context.state.hour, context.state.message, context.state.phoneNumber, context.state.postCode, context.state.startDate, context.state.street]);

  const handleChange = (event) => {
    setState({
      ...contact,
      [event.target.name]: event.target.value
    });
  };

  const validate = () => {
    let isValid = true;
    if (contact.street?.length < 1) {
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
    if (contact.city?.length < 1) {
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
    if (!/\d{2}-\d{3}/i.test(contact?.postCode)) {
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
    if (contact.phoneNumber?.length !== 9) {
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
    if (!/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(contact?.hour)) {
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

    isValid && setAnable(true);
    return isValid;
  };

  const handleDateChoose = date => {
    setState({
      ...contact,
      startDate: date
    });
  };

  useEffect(() => {
    context.setState(contact);
    // eslint-disable-next-line
  }, [contact]);

  const handleSubmit = () => {
    context.setState(contact)
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
                          value={contact.street}
                          name="street"
                          type="text" />
                    </label>
                    <label>Miasto
                      <input
                          onChange={handleChange}
                          value={contact.city}
                          name="city"
                          type="text" />
                    </label>
                    <label>Kod pocztowy
                      <input
                          onChange={handleChange}
                          value={contact.postCode}
                          name="postCode"
                          type="text" />
                    </label>
                    <label>Numer telefonu
                      <input
                          onChange={handleChange}
                          value={contact.phoneNumber}
                          name="phoneNumber"
                          type="text" />
                    </label>
                  </form>
                <div className="errors" style={{display: 'flex', flexDirection: 'column'}}>
                  <span>{contact.streetError}</span>
                  <span>{contact.cityError}</span>
                  <span>{contact.postCodeError}</span>
                  <span>{contact.phoneNumberError}</span>
                </div>
              </div>
              <div className="date">
                <h5>Termin odbioru:</h5>
                <form>
                  <label>Data
                    <DatePicker
                      dateFormat="yyyy/MM/dd"
                      showTimeSelectnpm
                      selected={contact.startDate}
                      onChange={handleDateChoose}
                    />
                  </label>
                  <label>Godzina
                    <input
                        onChange={handleChange}
                        value={contact.hour}
                        type="text"
                        name="hour"/>
                  </label>
                  <label>Uwagi dla kurriera
                    <textarea
                        onChange={handleChange}
                        value={contact.message}
                        name="message"/>
                  </label>
                </form>
                <div className="errors" style={{paddingTop: '20px'}}>
                  <span style={{fontSize: '2.2rem'}}>{contact.hourError}</span>
                </div>
              </div>
            </section>
            <div className="links-section">
              <button onClick={handleSubmit}>
                <Link to={ROUTES.STEP_3}>Wstecz</Link>
              </button>
              <button onClick={handleSubmit}>
                {disabled ? <Link to={ROUTES.SUMMARY}>Dalej</Link> : <p>Dalej</p>}
              </button>
            </div>
          </div>
        </>
    );
};

export default Step4;