import React, { useState } from 'react';
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

import api from './api' 

import Side from './components/Side'
import Funfacts from './components/Funfacts'

import 'simplebar/dist/simplebar.min.css'

function App() {

  let [funfactObj,setFunfactObj] = useState([])
  let [funfactID,setFunfactID] = useState(Number)
  let [funfact,setFunfact] = useState(String)

  function loadFact() {
    const URL = 'funfacts?per_page=99'
    api.get(URL)
    .then(function(response){
      let obj = response.data
      for (let i in obj) {
        setFunfactObj(funfactObj => [...funfactObj,obj[i].title.rendered])
      }
    })
    .finally(function(){
      getFunFacts()
    })
  }
  function getFunFacts() {
    let len = funfactObj.length
    let i = Math.floor(Math.random() * len)
    setFunfactID(i + 1)
    setFunfact(funfactObj[i])
  }
  
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
