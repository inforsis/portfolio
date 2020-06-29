import React from 'react'

import Menu from './../Menu'
import profilePic from './assets/img/jadson_moreira.webp'

import './assets/scss/objects/_side.scss';
import './assets/scss/components/_side.scss';
import './assets/scss/components/_profile-pic.scss';
import './assets/scss/components/_credits.scss';

export default function Side() {

  return (
    <aside className="side">
      <figure className="profile-pic">
          <span className="pic-rounded">
              <img src={profilePic} className="img" alt="foto perfil"/>                
          </span>
      </figure>
      <Menu/>
      <span className="credits">
          Done with <i className="material-icons heart">favorite</i> and <i className="material-icons song">audiotrack</i>
      </span>
    </aside> 
  )
}
