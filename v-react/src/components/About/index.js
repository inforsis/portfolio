import React, {useState,useEffect} from 'react'

import api from '../../api'

import './assets/scss/components/_about-resume.scss'

import Timeline from '../Timeline'

import simplebar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function About() {
  let [about,setAbout] = useState([])

  useEffect(() => {
    aboutResume()
  })

  function aboutResume() {
    //document.getElementById('checkFunFacts').click()
    const URL = 'pages/9';
    api.get(URL)
    .then(function(response){
      let about = (response.data);
      let aboutData = []
      aboutData.push(about.title.rendered);
      aboutData.push(about.content.rendered);
      setAbout(aboutData)
    })
    .finally(function(){
      //document.getElementById('checkFunFacts').checked = false
    })
  }

  return (
    <section id="about" className="page-section">
            
        <h1 className="title" id="aboutTitle" dangerouslySetInnerHTML={{__html:about[0]}}></h1>

        <div className="content">
            
            <simplebar className="about-resume" data-simplebar-auto-hide="false">
                <div id="aboutResume" dangerouslySetInnerHTML={{__html:about[1]}}></div>
            </simplebar>

            <Timeline/>

        </div>

    </section>
  )
}
