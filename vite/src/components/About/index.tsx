import React, {useState,useEffect} from 'react'

import api from '../../api'
import type { PageContent } from '../../types/api'

import './assets/scss/components/_about-resume.scss'

import Timeline from '../Timeline'

// import simplebar from 'simplebar-react'
// import 'simplebar/dist/simplebar.min.css'

export default function About() {
  const [about,setAbout] = useState<[string, string]>(['', ''])

  useEffect(() => {
    //document.getElementById('checkFunFacts').click()
    const URL = 'about';
    api.get<PageContent>(URL)
    .then(function(response){
      const about = (response.data);
      setAbout([about.title, about.content])
    })
    .finally(function(){
      //document.getElementById('checkFunFacts').checked = false
    })
  },[])


  return (
    <section id="about" className="page-section">
            
        <h1 className="title" id="aboutTitle" dangerouslySetInnerHTML={{__html:about[0]}}></h1>

        <div className="content">
            
            <div className="about-resume" data-simplebar-auto-hide="false">
                <div id="aboutResume" dangerouslySetInnerHTML={{__html:about[1]}}></div>
            </div>

            <Timeline/>

        </div>

    </section>
  )
}
