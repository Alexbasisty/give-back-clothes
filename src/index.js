import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import Firebase, { FirebaseContext } from "./Components/Firebase";
import { Reset } from 'styled-reset';
import './scss/main.scss';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Reset />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

