import React, {useState,useEffect} from 'react'

import api from '../../api'

import './assets/scss/components/_contact-pointers.scss'
import './assets/scss/components/_container-contact.scss'

export default function Contact() {
  let [social,setSocial] = useState([])
  useEffect(() => {
    loadContacts()
  },[])
  function loadContacts() {
    //document.getElementById('checkFunFacts').click()
    const URL = 'social?per_page=99&filter[orderby]=date&order=asc';
    api.get(URL)
    .then(function(response){
      var obj = (response.data);
      for (var i = 0; i < obj.length; i++) {

        let label = obj[i].title.rendered
        let link = obj[i].excerpt.rendered
        link = link.replace('<p>','')
        link = link.replace('</p>','')
        let title = obj[i].content.rendered
        title = title.replace('<p>','')
        title = title.replace('</p>','')
        
        setSocial(social => [...social,{'label': label, 'link':link, 'title':title}])
      }
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

          <simplebar data-simplebar-auto-hide="false" className="main-content container-contact">
              
              <div id="contactBox" className="container-form">
                {social.map((item,index) => (                
                  <dl class="contact-pointers">
                    <dt className="title" v-if="index === 0" dangeroulsySetInnerHTML={{__html:item.label}}></dt>
                    
                    <dd className="item"  v-if="index === 1" dangeroulsySetInnerHTML={{__html:item.title}}></dd>
                    
                    <dd class="item">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.title} className="title">{item.label}</a>
                    </dd>
                  </dl>
                ))}
              </div>

          </simplebar>
  
      </div>

  </section>
  )
}
