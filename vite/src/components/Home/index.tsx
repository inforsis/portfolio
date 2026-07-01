import React, {useState, useEffect} from 'react'

import api from '../../api'
import type { PageContent } from '../../types/api'

import './assets/scss/components/_page-home.scss'
import './assets/scss/components/_cover-area.scss'

export default function Home() {
  
  const [coverHtml,setCoverArea] = useState('');

  useEffect(() => {
    loadCover()
  }, [])
  function loadCover() {
    const URL = 'home';
    api.get<PageContent>(URL)
    .then(function(response){
      const page = (response.data);
      setCoverArea(page.content);
    })
  }
  return (
    <section id="home" className="page-section">            
      <div id="coverArea" className="cover-area">
        <span dangerouslySetInnerHTML={{__html:coverHtml}}></span>
      </div>        
    </section>
  )
}
