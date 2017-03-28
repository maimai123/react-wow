import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import wow from 'wowjs';
import 'animate.css';
import './css/index.css';

new wow.WOW().init();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
