import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {Provider} from "react-redux";
//import {pokeApi} from './redux/api';
import './style/main.css';
import './style/style.scss'
import  {store}  from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> 
  ,
  document.getElementById('root')
);

