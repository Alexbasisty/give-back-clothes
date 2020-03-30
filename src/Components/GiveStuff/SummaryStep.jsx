import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from '../Session';
import app from "firebase";

import { StuffContext } from "./StuffContext";

const SummaryStepContext = () => (
  <AuthUserContext.Consumer>
    {authUser =>
        <SummaryStep user={authUser} />
    }
  </AuthUserContext.Consumer>
);

class SummaryStep extends Component {
  state = {
    staff: '',
    bagsNumber: '',
    lokalization: '',
    foundation: '',
    whomHelp: '',
    street: '',
    date: '',
    city: '',
    postCode: '',
    phoneNumber: '',
    hour: '',
    message: ''
  };

  componentDidMount() {
    if ((localStorage.getItem('user_staff') !== null)) {
      const staff = JSON.parse(localStorage.getItem('user_staff'));
      this.setState({
        staff
      })
    }
    if ((localStorage.getItem('bag_numb') !== null)) {
      const bagsNumber = JSON.parse(localStorage.getItem('bag_numb'));
      this.setState({
        bagsNumber
      })
    }
    if ((localStorage.getItem('lokalization') !== null)) {
      const lokalization = JSON.parse(localStorage.getItem('lokalization'));
      this.setState({
        lokalization
      })
    }
    if ((localStorage.getItem('foundation') !== null)) {
      const foundation = JSON.parse(localStorage.getItem('foundation'));
      this.setState({
        foundation
      })
    }
    if ((localStorage.getItem('whomHelp') !== null)) {
      const whomHelp = JSON.parse(localStorage.getItem('whomHelp'));
      this.setState({
        whomHelp
      })
    }
    if ((localStorage.getItem('street') !== null)) {
      const street = JSON.parse(localStorage.getItem('street'));
      this.setState({
        street
      })
    }
    if((localStorage.getItem('date') !== null)) {
      const date = JSON.parse(localStorage.getItem('date')).substring(0,10);
      this.setState({
        date: date
      })
    }
    if((localStorage.getItem('city') !== null)) {
      const city = JSON.parse(localStorage.getItem('city'));
      this.setState({
        city
      })
    }
    if((localStorage.getItem('postCode') !== null)) {
      const postCode = JSON.parse(localStorage.getItem('postCode'));
      this.setState({
        postCode
      })
    }
    if((localStorage.getItem('phoneNumber') !== null)) {
      const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));
      this.setState({
        phoneNumber
      })
    }
    if((localStorage.getItem('hour') !== null)) {
      const hour = JSON.parse(localStorage.getItem('hour'));
      this.setState({
        hour
      })
    }
    if((localStorage.getItem('message') !== null)) {
      const message = JSON.parse(localStorage.getItem('message'));
      this.setState({
        message
      })
    }
  }

  handleSubmitSummary = () => {
    if(this.props.user.uid !== null) {
      const userUid = this.props.user.uid;
      const userRef = app.database().ref(`users/${userUid}`);
      const newDonate = this.state;
      userRef.push(newDonate);
      localStorage.clear();
    }
  };

  render() {
    const { staff,
      bagsNumber,
      lokalization,
      foundation,
      whomHelp,
      street,
      date,
      city,
      postCode,
      phoneNumber,
      hour,
      message} = this.state;

    return (
        <>
          <div className="step1-form">
            <h1>Podsumowanie Twojej darowizny</h1>
            <h2>Oddajesz:</h2>
            <div className="summary">
              <img src={require('../../assets/Icon-1.svg')} alt="t-shirt" />
              <small style={{width: '900px'}}>worków: {bagsNumber}; {[...staff]}, {[...whomHelp]} {foundation}</small>
            </div>
            <div className="summary">
              <img src={require('../../assets/Icon-4.svg')} alt="circle-arrows" />
              <small>dla lokalizacji: {lokalization}</small>
            </div>
            <section id="pick-up-datas">
              <div className="address">
                <h5>Adres odbioru:</h5>
                <div className="street">
                  <p>Ulica</p>
                  <span>{street}</span>
                </div>
                <div className="town">
                  <p>Miasto</p>
                  <span>{city}</span>
                </div>
                <div className="post-code">
                  <p>Kod pocztowy</p>
                  <span>{postCode}</span>
                </div>
                <div className="street">
                  <p>Numer telefonu</p>
                  <span>{phoneNumber}</span>
                </div>
              </div>
              <div className="date-data">
                <h5>Termin odbioru:</h5>
                <div className="date">
                  <p>Data</p>
                  <span>{date}</span>
                </div>
                <div className="hour">
                  <p>Godzina</p>
                  <span>{hour}</span>
                </div>
                <div className="notes-for-courier">
                  <p>Uwagi dla kuriera</p>
                  <span>{message}</span>
                </div>
              </div>
            </section>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_4}>Wstecz</Link>
              </button>
              <button onClick={this.handleSubmitSummary}>
                <Link to={ROUTES.THANKS}>Potwierdzam</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default SummaryStepContext;