import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelServise from './services/MarvelService'
import './style/style.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

