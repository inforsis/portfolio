import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//FONTS
// Material Design Icons
import './assets/fonts/material-design-icons/material-icons.css' 
//IBMPLEXSANS
import './assets/fonts/ibmplexsans/stylesheet.css' 
//Titillium Web
import './assets/fonts/titilliumweb/stylesheet.css'
//STYLE
import './assets/scss/main.scss'
import './assets/scss/objects/_main-container.scss'
import './assets/scss/objects/_page-section.scss'

//ROUTER
import Router from './router'

import Side from './components/Side'

function App() {
  
  return (
    <BrowserRouter>
      <Side/>
      <main className="main-container animated">
        <Router/>
      </main>
    </BrowserRouter> 
  );
}

export default App;
