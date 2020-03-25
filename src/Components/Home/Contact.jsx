import React, { Component } from 'react';
import Footer from "./Footer";

class Contact extends Component {

  render() {
    return (
        <div id='contact' className="contact">
          <div className='contact-form'>
            <div />
            <div>
              <div className='title'>
                <h1>Skontaktuj się z nami</h1>
                <img src={require('../../assets/Decoration.svg')} />
              </div>
            <form>
              <div className="contact-data">
                <label>Wpisz swoje imię
                  <input name='name' placeholder='Krzysztof' />
                </label>
                <label>Wpisz swój email
                  <input name='mail' placeholder='abc@xyz.pl' />
                </label>
              </div>
              <label className='message'>Wpisz swoją wiadomość
                <textarea
                  name='message'
                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
              </label>
              <button>Wyślij</button>
            </form>
            </div>
          </div>
          <div><Footer /></div>
        </div>
    );
  }
}

export default Contact;