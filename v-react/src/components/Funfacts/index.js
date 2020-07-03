import React,{useState,useEffect} from 'react'

import api from '../../api'

import './assets/scss/components/_fun-facts-card.scss'
import './assets/scss/components/_fun-facts-icon.scss'

export default function Funcfacts(props) {
  const funfactProp = props.funfactProp
  const IDProp = props.funfactIDProp
  return (
    <label  id="funFactsCard" class="fun-facts-card animated" for="checkFunFacts" title="Click to close">
        
        <div class="content">

            <img src="./assets/img/Cube-1s-39px.svg" alt="" />

            <h6 class="title">
                some fun fact about me #<span id="funFactID">{{IDProp}}</span>
            </h6>
            
            <p id="funFacts" dangerouslySetInnerHTML={{__html:funfactProp}}></p> 

        </div>

    </label>
  )
}
