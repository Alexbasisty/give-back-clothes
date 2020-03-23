import React, { Component } from 'react';
import app from 'firebase/app';

class WhoWeHelp extends Component {
  state = {
    description: '',
    title: '',
    mission: '',
    staff: ''
      };

  getData = () => {
   const foundations = app.database().ref('foundations');
   foundations.on('value', data => {
     console.log(data.val());
   });
  };

  render() {
    return (
      <div id="foundations" onClick={this.getData}>
          <h2>Komu pomagamy?</h2>
          <img src={require('../../../assets/Decoration.svg')} alt='decoration' />
          <section className='links'>
            <p>Fundacjom</p>
            <p>Organizacjom pozarządowym</p>
            <p>Lokalnym zbiórkom</p>
          </section>
        </div>

    )                                                                               
  }
}

export default WhoWeHelp;