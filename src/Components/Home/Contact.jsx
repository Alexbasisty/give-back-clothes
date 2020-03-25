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
              <div>
                <label>Wpisz swoje imię</label>
                <input placeholder='Krzysztof' />
                <label>Wpisz swój email</label>
                <input placeholder='abc@xyz.pl' />
              </div>
              <label>Wpisz swoją wiadomość</label>
              <textarea
                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              />
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