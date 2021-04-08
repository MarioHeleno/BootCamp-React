import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/style.css';
// import Inicial from './pages/Inicial';
import MinhasMusicas from './pages/MinhasMusicas';

ReactDOM.render(
  <React.StrictMode>
    {/* <Inicial /> */}
    <MinhasMusicas />
  </React.StrictMode>,
  document.getElementById('root')
);
