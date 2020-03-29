import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import ImportantField from "./ImportantField";

class Step1 extends Component {
  state = {
    wantToGive: ['ubrania, które nadają się do ponownego użycia'],
  };

  // componentDidMount() {
  //   if ((localStorage.getItem('user_staff') !== null)) {
  //     // const dataFromLS = JSON.parse(localStorage.getItem('user_staff'));
  //     // this.setState({ wantToGive: '' });
  //     this.setState({
  //       wantToGive : dataFromLS
  //     });
  //     localStorage.setItem('user_staff', JSON.stringify(''))
  //   }
  //
  // }


  saveState = () => {
    localStorage.setItem('user_staff', JSON.stringify(this.state.wantToGive));
    console.log(this.state.wantToGive);
  };

  handleStuffSelect = (event) => {
    const giveList = this.state.wantToGive;
    const check = event.target.checked;
    const checkedStuff = event.target.value;

    if(check) {
      this.setState({
        wantToGive: [...this.state.wantToGive, checkedStuff]
      })
    } else {
      const index = giveList.indexOf(checkedStuff);
      if(index > -1) {
        giveList.splice(index, 1);
        this.setState({
          wantToGive: giveList
        })
      }
    }

    this.saveState();
  };

  render() {
    const data = JSON.parse(localStorage.getItem('user_staff'));
    return (
        <>
          <ImportantField>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 1/4</h3>
            <h1>Zaznacz co chcesz oddać:</h1>
            <form>
              <label>
                <input
                    defaultChecked
                    onChange={this.handleStuffSelect}
                    type="checkbox"
                    value="ubrania, które nadają się do ponownego użycia"/>
                <span className="checkmark"/>
                ubrania, które nadają się do ponownego użycia
              </label>
              <label>
                <input type="checkbox"
                       // checked={data.includes("ubrania, do wyrzucenia")}
                       onChange={this.handleStuffSelect}
                       value="ubrania, do wyrzucenia"
                />
                <span className="checkmark"/>
                ubrania, do wyrzucenia
              </label>
              <label>
                <input type="checkbox"
                       value="zabawki"
                       onChange={this.handleStuffSelect}
                />
                <span className="checkmark"/>
                zabawki
              </label>
              <label>
                <input type="checkbox"
                       value="książki"
                       onChange={this.handleStuffSelect}
                />
                <span className="checkmark"/>
                książki
              </label>
              <label>
                <input type="checkbox"
                       value="inne"
                       onChange={this.handleStuffSelect}
                />
                <span className="checkmark"/>
                Inne
              </label>
            </form>

            <div className="links-section">
              <button onClick={this.saveState}>
                <Link to={ROUTES.STEP_2}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
  }
}

export default Step1;