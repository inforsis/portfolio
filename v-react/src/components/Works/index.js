import React,{useState,useEffect} from 'react'

import api from '../../api'
import Statistics from '../Statistics'

import './assets/scss/components/_works.scss'

export default function Works() {
  let [objWorks,setObjWorks] = useState([])
  useEffect(() =>(
    loadPortfolio()
  ),[])
  function loadPortfolio() {
      //document.getElementById('checkFunFacts').click()
      const URL= 'get-portfolio';
      api.get(URL)
      .then(function(response){
        let obj = (response.data);
        for (let i=0; i < obj.length; i++) {
          setObjWorks(objWorks => [...objWorks,obj[i]])
        }
      })
      .finally(function(){
        //document.getElementById('checkFunFacts').checked = false
      })
  }

  return (
    <section id="works" className="page-section">
            
      <h1 className="title">
          My Portfolio
      </h1>

      <div className="content">

          <simplebar className="works" data-simplebar-auto-hide="false">
              
              <div id="worksContent">
                {objWorks.map((item) => (
                  <div className="item">
                    <div className="container">
                      <figure className="thumb">
                          <img className="web" src={item[5].thumbnail[0]} alt="portfolio thumbnail" />
                          <img className="mobile" src={item[5].thumbnail[1]} alt="portfolio thumbnail" />
                          <img className="tablet" src={item[5].thumbnail[2]} alt="portfolio thumbnail" />
                      </figure>
                      <div className="content">
                        <h3 className="title" dangerouslySetInnerHTML={{__html:item[1].title}}></h3>
                        <small className="description" dangerouslySetInnerHTML={{__html:item[2].description}}></small>
                        <ul className="listing">
                          {item[4].tags.map((tag) => (
                            <li class="item">{tag}</li>
                          ))}
                        </ul>
                        <a href={item[3].link} target="_blank" rel="noopener noreferrer">{item[3].link}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </simplebar>

      </div>

      <Statistics/>

    </section>
  )
}

