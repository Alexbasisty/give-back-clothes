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
          <img src={require('../../../assets/Decoration.svg')} alt='decoration' />
          <section className='links'>
            <p>Fundacjom</p>
            <p>Organizacjom pozarządowym</p>
            <p>Lokalnym zbiórkom</p>
          </section>
        <section>
          <p>{description}</p>
          <div>
            <h4>{title}</h4>
            <h6>{mission}</h6>
            <p>{staff}</p>
          </div>
        </section>
      </div>
    )                                                                               
  }
}

export default WhoWeHelp;