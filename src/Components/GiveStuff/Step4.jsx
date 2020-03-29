import React, { Component } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Step4 extends Component {
  state = {
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
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.validate();
  };

  validate = () => {
    let isValid = true;
    if (this.state.street.length < 1) {
      isValid = false;
      this.setState({
        streetError: 'Ulica:  napisz conajmniej 2 znaki'
      })
    } else {
      this.setState({
        streetError: ''
      })
    }
    if (this.state.city.length < 1) {
      isValid = false;
      this.setState({
        cityError: 'Miasto:  napisz conajmniej 2 znaki'
      })
    } else {
      this.setState({
        cityError: ''
      });
    }

    if (!/\d{2}-\d{3}/i.test(this.state.postCode)) {
      isValid = false;
      this.setState({
        postCodeError: 'Kod pocztowy:  format: **-***'
      })
    } else {
      this.setState({
        postCodeError: ''
      })
    }
    if (this.state.phoneNumber.length !== 9) {
      isValid = false;
      this.setState({
        phoneNumberError: 'Telefon:  musi mieć 9 znaków'
      })
    } else {
      this.setState({
        phoneNumberError: ''
      })
    }
    if (!/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(this.state.hour)) {
      isValid = false;
      this.setState({
        hourError: 'Godzina:  format --:--'
      })
    } else {
      this.setState({
        hourError: ''
      })
    }
    return isValid;
  };

  handleDateChoose = date => {
    this.setState({
      startDate: date
    });

    this.validate();
  };

  render() {
    const { startDate, street, streetError, city, cityError, postCode, postCodeError, phoneNumber, phoneNumberError, hour, hourError, message } = this.state;
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
                          onChange={this.handleChange}
                          value={street}
                          name="street"
                          type="text" />
                    </label>
                    <label>Miasto
                      <input
                          onChange={this.handleChange}
                          value={city}
                          name="city"
                          type="text" />
                    </label>
                    <label>Kod pocztowy
                      <input
                          onChange={this.handleChange}
                          value={postCode}
                          name="postCode"
                          type="text" />
                    </label>
                    <label>Numer telefonu
                      <input
                          onChange={this.handleChange}
                          value={phoneNumber}
                          name="phoneNumber"
                          type="text" />
                    </label>
                  </form>
                <div className="errors" style={{display: 'flex', flexDirection: 'column'}}>
                  <span>{streetError}</span>
                  <span>{cityError}</span>
                  <span>{postCodeError}</span>
                  <span>{phoneNumberError}</span>
                </div>
              </div>
              <div className="date">
                <h5>Termin odbioru:</h5>
                <form>
                  <label>Data
                    <DatePicker
                      selected={startDate}
                      onChange={this.handleDateChoose}
                    />
                  </label>
                  <label>Godzina
                    <input
                        onChange={this.handleChange}
                        value={hour}
                        type="text"
                        name="hour"/>
                  </label>
                  <label>Uwagi dla kurriera
                    <input
                        onChange={this.handleChange}
                        value={message}
                        name="message"/>
                  </label>
                </form>
                <div className="errors" style={{paddingTop: '20px'}}>
                  <span style={{fontSize: '2.2rem'}}>{hourError}</span>
                </div>
              </div>
            </section>
            <div className="links-section">
              <button onClick={() => {
                console.log(this.state);
              }}>
                <Link to={ROUTES.STEP_3}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.SUMMARY}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step4;