import React from 'react'

import Menu from './../Menu'

import './assets/scss/objects/_side.scss';
import './assets/scss/components/_side.scss';
import './assets/scss/components/_profile-pic.scss';
import './assets/scss/components/_credits.scss';

export default function Side() {

  return (
    <aside className="side">
      <figure className="profile-pic">
          <span className="pic-rounded">
              <img src="https://www.gravatar.com/avatar/55febb08b922b32692b58a5b488b6816?s=150&d=mp" className="img" alt="foto perfil"/>                
          </span>
      </figure>
      <Menu/>
      <span className="credits">
          Done with <i className="material-icons heart">favorite</i> and <i className="material-icons song">audiotrack</i>
      </span>
    </aside> 
  )
}
