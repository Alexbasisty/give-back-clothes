import React, { useState, useContext, useEffect } from 'react';
import ImportantField from "./ImportantField";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {StuffContext} from "./StuffContext";

const Step3 = () => {
  const context = useContext(StuffContext);

  const [isDown, setDown] = useState(true);

  const [help, setHelp] = useState({
    whomHelp: ['dzieciom '],
  });

  const [localization, setLocalization] = useState({
    localization: '- wybierz -',
  });

  const [fund, setFund] = useState({
    foundation: ''
  });

  const handleArrow = () => {
    setDown(prevState => !prevState)
  };

  useEffect(() => {
    context.state.whomHelp && setHelp({
      whomHelp: context.state.whomHelp
    });
    context.state.localization && setLocalization({
      localization: context.state.localization
    });
    context.state.foundation && setFund({
      foundation: context.state.foundation
    });
  }, []);

  const handleWhoHelp = (event) => {
    const helpList = [...help.whomHelp];
    const check = event.target.checked;
    const checkedStuff = event.target.value;

    if (check) {
      setHelp(prevState => ({
        ...prevState,
        whomHelp: [...help.whomHelp, checkedStuff]
      }))
    } else {
      const index = helpList.indexOf(checkedStuff);
      if (index > -1) {
        helpList.splice(index, 1);
        setHelp(prevState => ({
          ...prevState,
          whomHelp: helpList
        }))
      }
    }
  };

  const handleSelect = e => {
    if (e.target.id.length > 0) {
      setLocalization({ localization: e.target.id });
    } else {
      setLocalization({
        localization: '- wybierz -'
      });
    }
  handleArrow()
  };

  const handleInputFoundation = e => {
    setFund({
      foundation: e.target.value,
    });

    if(fund.foundation.length > 1) {
      setHelp({
        whomHelp: []
      })
    }
  };

  useEffect(() => {
    context.setState(localization);
    context.setState(help);
    context.setState(fund);
    console.log(context);
  }, [help, localization, fund]);

    return  (
        <>
          <ImportantField>
            Jeśli wiesz komu chcesz pomóc,
            możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje
            po ich lokalizacji bądź celu ich pomocy.
          </ImportantField>
          <div className="step1-form">
            <h3>Krok 3/4</h3>
            <h1>Lokalizacja:</h1>
            <div className="select-quo">
              <div className="select-title">
                <p
                    onClick={handleArrow}
                >
                  {localization.localization}
                  {isDown ? <img src={require('../../assets/Icon-Arrow-Down.svg')} alt="down"/> : <img src={require('../../assets/Icon-Arrow-Up.svg')} alt="down"/>}
                </p>
              </div>

            </div>
            {isDown
                ?
                ''
                :
                <div className="select city" style={{width: '300px', float: 'none'}}
                onClick={handleSelect}>
                  <span id="Poznań">Poznań</span>
                  <span id="Warszawa">Warszawa</span>
                  <span id="Kraków">Kraków</span>
                  <span id="Wrocłąw">Wrocław</span>
                  <span id="Katowice">Katowice</span>
                </div>}
            <section className="help-groups">
              <h5>Komu chcesz pomóc?</h5>
              <form className="form-buttons">
                <label>
                  <input
                      checked={help.whomHelp.includes('dzieciom ')}
                      name="children"
                      onChange={handleWhoHelp}
                      type="checkbox"
                      value="dzieciom "/>
                  <span>dzieciom</span>
                </label>
                <label>
                  <input
                      checked={help.whomHelp.includes('samotnym matkom ')}
                      onChange={handleWhoHelp}
                      name="mothers"
                      type="checkbox"
                      value="samotnym matkom "/>
                  <span>samotnym matkom</span>
                </label>
                <label>
                  <input
                      checked={help.whomHelp.includes('bezdomnym ')}
                      onChange={handleWhoHelp}
                      name="homeless"
                      type="checkbox"
                      value="bezdomnym "/>
                  <span>bezdomnym</span>
                </label>
                <label>
                  <input
                      checked={help.whomHelp.includes('niepełnosprawnym ')}
                      onChange={handleWhoHelp}
                      name="disabled"
                      type="checkbox"
                      value="niepełnosprawnym "/>
                  <span>niepełnosprawnym</span>
                </label>
                <label>
                  <input
                      checked={help.whomHelp.includes('osobom starszym ')}
                      onChange={handleWhoHelp}
                      type="checkbox"
                      name="older"
                      value="osobom starszym "/>
                  <span>osobom starszym</span>
                </label>
              </form>
            </section>
            <section className='localization'>
              <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
              <input
                  onChange={handleInputFoundation}
                  type="text"
                  value={fund.foundation}/>
            </section>

            <div className="links-section">
              <button>
                <Link to={ROUTES.STEP_2}>Wstecz</Link>
              </button>
              <button>
                <Link to={ROUTES.STEP_4}>Dalej</Link>
              </button>
            </div>
          </div>
        </>
    );
};

export default Step3;