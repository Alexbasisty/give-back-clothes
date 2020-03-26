import React, { Component } from 'react';
import Footer from "./Footer";

class Contact extends Component {
  state = {
    name: '',
    mail: '',
    message: ''
  };

  handleBlur = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
        <div id='contact' className="contact">
          <div className='contact-form'>
            <div />
            <div>
              <div className='title'>
                <h1>Skontaktuj się z nami</h1>
                <img src={require('../../assets/Decoration.svg')} alt='decoration'/>
              </div>
            <form onSubmit={this.handleSubmit}>
              <div className="contact-data">
                <label>Wpisz swoje imię
                  <input name='name' placeholder='Krzysztof' onBlur={this.handleBlur} />
                </label>
                <label>Wpisz swój email
                  <input name='mail' placeholder='abc@xyz.pl' onBlur={this.handleBlur} />
                </label>
              </div>
              <label className='message'>Wpisz swoją wiadomość
                <textarea
                  name='message'
                  onBlur={this.handleBlur}
                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
              </label>
              <button type='submit'>Wyślij</button>
            </form>
            </div>
          </div>
          <div><Footer /></div>
        </div>
    );
  }
}

export default Contact;