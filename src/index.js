import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppButtonState from './AppButtonState';
import AppButtonChild from './AppButtonChild';
import AppButProps from './AppButtonProps';


ReactDOM.render(
  <>
  <App />
  <p><AppButProps /></p>
  <p><AppButtonChild /></p>
  <p><AppButtonState /></p>
  </>,
  document.getElementById('root')
);


