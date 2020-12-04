import React from 'react';
import ReactDOM from 'react-dom';
import Sitebar from './home';
import AboutMe from './aboutMe'
import "./index.scss";




ReactDOM.render(
  <React.StrictMode>
    <Sitebar/>
    <AboutMe/>
  </React.StrictMode>,
  document.getElementById('root')
);



