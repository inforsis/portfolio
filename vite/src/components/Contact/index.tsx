import React, {useState,useEffect} from 'react'

import api from '../../api'
import type { SocialLink } from '../../types/api'

import './assets/scss/components/_contact-pointers.scss'
import './assets/scss/components/_container-contact.scss'

export default function Contact() {
  const [social,setSocial] = useState<SocialLink[]>([])
  useEffect(() => {
    loadContacts()
  },[])
  function loadContacts() {
    //document.getElementById('checkFunFacts').click()
    const URL = 'social';
    api.get<SocialLink[]>(URL)
    .then(function(response){
      setSocial(response.data)
    })
    .finally(function(){
      //document.getElementById('checkFunFacts').checked = false
    })
  }
  return (
    <section id="contact" className="page-section">
      
      <h1 className="title">
          Contact me
      </h1>

      <div className="content">

          <div data-simplebar-auto-hide="false" className="main-content container-contact">
              
              <div id="contactBox" className="container-form">
                {social.map((item,index) => {
                  return (                
                    <dl className="contact-pointers" key={'contact'+index}>
                      {index === 0 ? 
                        <dt className="title" dangerouslySetInnerHTML={{__html:item.label}}></dt>
                      : null }
                      {index === 1 ?
                        <dd className="item" dangerouslySetInnerHTML={{__html:item.title}}></dd>
                      : null }
                      {index > 1 ?
                        <dd className="item">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.title} className="title">{item.label}</a>
                        </dd>
                      : null }
                    </dl>
                  )
                })}
              </div>

          </div>
  
      </div>

  </section>
  )
}
