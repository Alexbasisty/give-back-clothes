import React, { Component } from 'react';
import app from 'firebase/app';

class WhoWeHelp extends Component {
  state = {
    description: '',
    items: []
  };
  componentDidMount() {
    // const { description, title, mission, staff } = this.state;
    const foundations = app.database().ref('foundations/0');
    foundations.on('value', data => {
      const item = data.val();
      this.setState({
        description: item.desc,
        title: item.items[0].header,
      });
      console.log(item.desc);
    });

  }

  getData = () => {
   const foundations = app.database().ref('foundations');
   foundations.on('value', data => {
     console.log(data.val());
   });
  };

  render() {
    const { description, title, mission, staff } = this.state;
    return (
      <div id="foundations" onClick={this.getData} className="foundations">
          <h2>Komu pomagamy?</h2>
          <img src={require('../../../assets/Decoration.svg')} className="decor" alt='decoration' />
          <section className='links'>
            <p className='choose'>Fundacjom</p>
            <p className="middle-button">Organizacjom pozarządowym</p>
            <p>Lokalnym zbiórkom</p>
          </section>
        <section className="items">
          <p>{description}</p>
          <div className="fund-description">
            <div className="found-title">
              <h4 className="header">Fundacja “Dbam o Zdrowie”</h4>
              <h6 className="subheader">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h6>
            </div>
            <p className="desc">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
        </section>
      </div>
    )                                                                               
  }
}

export default WhoWeHelp;