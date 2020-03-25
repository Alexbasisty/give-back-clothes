import React, { Component } from 'react';
import Footer from "./Footer";

class Contact extends Component {

  render() {
    return (
        <div id='contact' className="contact">
          <div className='contact-form'>
            <h1>Skontaktuj się z nami</h1>
            <img src={require('../../assets/Decoration.svg')} />
            <form>
              <div>
                <label>Wpisz swoje imię</label>
                <input />
                <label>Wpisz swój email</label>
                <input />
              </div>
              <label>Wpisz swoją wiadomość</label>
              <textarea />
              <button>Wyślij</button>
            </form>
          </div>
          <div><Footer /></div>
        </div>
    );
  }
}

export default Contact;