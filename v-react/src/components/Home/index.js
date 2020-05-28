import React, {useState, useEffect} from 'react'

import api from '../../api'

/*import '../../assets/scss/settings/settings'
import '../../assets/scss/tools/tools'
import './assets/scss/components/_page-home.scss'
import './assets/scss/components/_cover-area.scss'*/

export default function Home() {
  
  const [coverHtml,setCoverArea] = useState([]);

  useEffect(() => {
    loadCover()
  })
  function loadCover() {
    const URL = 'pages/7';
    api.get(URL)
    .then(function(response){
      let page = (response.data);
      setCoverArea(page.content.rendered);
    })
  }
  return (
    <div id="home" className="page-section">
            
        <div id="coverArea" className="cover-area">
          <span dangerouslySetInnerHTML={{__html:coverHtml}}></span>
        </div>
        
    </div>
  )
}