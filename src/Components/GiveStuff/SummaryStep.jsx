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

  handleSubmitSummary = (context) => {
    if(this.props.user.uid !== null) {
      const userUid = this.props.user.uid;
      const userRef = app.database().ref(`users/${userUid}`);
      const newDonate = context.state;
      userRef.push(newDonate);
      localStorage.clear();
    }
  };

  render() {

    return (
        <StuffContext.Consumer>
          {context => (
              <div className="step1-form">
                <h1>Podsumowanie Twojej darowizny</h1>
                {console.log(context)}
                <h2>Oddajesz:</h2>
                <div className="summary">
                  <img src={require('../../assets/Icon-1.svg')} alt="t-shirt" />
                  <small style={{width: '900px'}}>worków: {context.state.bagsNumber}; {context.state.wantToGive}, {context.state.whomHelp} {context.state.foundation}</small>
                </div>
                <div className="summary">
                  <img src={require('../../assets/Icon-4.svg')} alt="circle-arrows" />
                  <small>dla lokalizacji: {context.state.city}</small>
                </div>
                <section id="pick-up-datas">
                  <div className="address">
                    <h5>Adres odbioru:</h5>
                    <div className="street">
                      <p>Ulica</p>
                      <span>{context.state.street}</span>
                    </div>
                    <div className="town">
                      <p>Miasto</p>
                      <span>{context.state.city}</span>
                    </div>
                    <div className="post-code">
                      <p>Kod pocztowy</p>
                      <span>{context.state.postCode}</span>
                    </div>
                    <div className="street">
                      <p>Numer telefonu</p>
                      <span>{context.state.phoneNumber}</span>
                    </div>
                  </div>
                  <div className="date-data">
                    <h5>Termin odbioru:</h5>
                    <div className="date">
                      <p>Data</p>
                      <span>{JSON.stringify(context.state.startDate).substring(1, 11)}</span>
                    </div>
                    <div className="hour">
                      <p>Godzina</p>
                      <span>{context.state.hour}</span>
                    </div>
                    <div className="notes-for-courier">
                      <p>Uwagi dla kuriera</p>
                      <span>{context.state.message}</span>
                    </div>
                  </div>
                </section>
                <div className="links-section">
                  <button>
                    <Link to={ROUTES.STEP_4}>Wstecz</Link>
                  </button>
                  <button onClick={() => this.handleSubmitSummary(context)}>
                    <Link to={ROUTES.THANKS}>Potwierdzam</Link>
                  </button>
                </div>
              </div>
          )}
        </StuffContext.Consumer>
    );
  }
}

export default SummaryStepContext;