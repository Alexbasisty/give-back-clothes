import React, { useState, useContext, useEffect } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {StuffContext} from "./StuffContext";

const Step2 = () => {
  const context = useContext(StuffContext);
  const [isDown, setDown] = useState(true);
  const [bagsNumber, setBagsNumber] = useState({
    bagsNumber: '- wybierz -',
  });
// state = {
  //   isDown: true,
  //   bagsNumber: '- wybierz -',
  // };
  //
  // saveState = () => {
  //   localStorage.setItem('bag_numb', JSON.stringify(this.state.bagsNumber))
  // };

  // componentDidMount() {
  //   if ((localStorage.getItem('bag_numb') !== null)) {
  //     const x = localStorage.getItem('bag_numb').replace(/\\n/g, "\\n")
  //         .replace(/\\'/g, "\\'")
  //         .replace(/\\"/g, '\\"')
  //         .replace(/\\&/g, "\\&")
  //         .replace(/\\r/g, "\\r")
  //         .replace(/\\t/g, "\\t")
  //         .replace(/\\b/g, "\\b");
  //     const bagsNumber = JSON.parse(x);
  //
  //     this.setState({
  //       bagsNumber
  //     })
  //   }
  // }  setState(prevState => ({
  //         ...prevState,
  //         wantToGive: [...state.wantToGive, checkedStuff]
  //       }))

  const handleSelect = e => {
    if(e.target.id.length > 0) {
      setBagsNumber({bagsNumber: e.target.id})
    } else {
      setBagsNumber({
        bagsNumber: '- wybierz -',
      })
    }

    handleArrow();

  };

  useEffect(() => {
    console.log(bagsNumber);
    context.setState(bagsNumber)
  }, [bagsNumber]);

  const handleArrow = () => {
    setDown(prevState => !prevState)
  };

    return (
        <>
          <ImportantField>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a>TUTAJ</a>.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 2/4</h3>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <div className="select-quo">
              <div className="select-title">
                <h4>Liczba 60l worków:</h4>
                <p
                  onClick={handleArrow}
                >
                  {bagsNumber.bagsNumber}
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>
              {isDown
                  ?
                  ''
                  :
                  <div className="select" onClick={handleSelect}>
                    <span id="1">1</span>
                    <span id="2">2</span>
                    <span id="3">3</span>
                    <span id="4">4</span>
                    <span id="5">5</span>
                  </div>}
            </div>
            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_1}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_3}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    )
};

export default Step2;