import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const elem = React.createElement('div', {
  a: 5,
  b: 10,
});

console.log(elem);

ReactDOM.render(elem, document.querySelector('#root'));