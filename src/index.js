import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import Firebase, { FirebaseContext } from "./Components/Firebase";
import 'normalize.css';
import './scss/main.scss';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

