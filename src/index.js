import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import AboutMe from './aboutMe'
import "./index.scss";




ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <AboutMe/>
  </React.StrictMode>,
  document.getElementById('root')
);



