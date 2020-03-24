import React, { Component } from 'react';
import app from 'firebase/app';

class WhoWeHelp extends Component {
  state = {
    description: '',
    items: [],
    currentPage: 1,
    itemsPerPage: 3
  };

  componentDidMount() {
    const foundations = app.database().ref('foundations/0');
    foundations.on('value', data => {
      const item = data.val();
      this.setState({
        description: item.desc,
        items: item.items
      });
    });
  }

  handleGetData = event => {
    const pathId = event.target.id;
    const path = `foundations/${pathId}`;
    const foundations = app.database().ref(path);
    foundations.on('value', data => {
      const item = data.val();
      this.setState({
        description: item.desc,
        items: item.items
      });
    });
  };

  handlePagination = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { description, items,currentPage, itemsPerPage } = this.state;

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentItems = items.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <li key={number} id={number} onClick={this.handlePagination}>{number}</li>
    ));

    return (
      <div id="foundations" onClick={this.getData} className="foundations">
          <h2>Komu pomagamy?</h2>
          <img src={require('../../../assets/Decoration.svg')} className="decor" alt='decoration' />
          <section className='links'>
            <p id='0' className='choose' onClick={this.handleGetData}>Fundacjom</p>
            <p id='1' className="middle-button" onClick={this.handleGetData}>Organizacjom pozarządowym</p>
            <p id='2' onClick={this.handleGetData}>Lokalnym zbiórkom</p>
          </section>
        <section className="items">
          <p>{description}</p>

          {currentItems.map((item, index) => (
              <div key={index} className="fund-description">
                <div className="found-title">
                  <h4 className="header">{item.header}</h4>
                  <h6 className="subheader">{item.subheader}</h6>
                </div>
                <p className="desc">{item.desc}</p>
              </div>
          ))}
          <ul className="pagination">
            {renderPageNumbers}
          </ul>
        </section>
      </div>
    )                                                                               
  }
}

export default WhoWeHelp;