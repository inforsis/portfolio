import React,{useState,useEffect} from 'react'

import api from '../../api'
import type { PortfolioWork } from '../../types/api'
// import Statistics from '../Statistics'

import './assets/scss/components/_works.scss'

function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

export default function Works() {
  const [objWorks,setObjWorks] = useState<PortfolioWork[]>([])
  useEffect(() =>(
    loadPortfolio()
  ),[])
  function loadPortfolio() {
      //document.getElementById('checkFunFacts').click()
      const URL= 'portfolio';
      api.get<PortfolioWork[]>(URL)
      .then(function(response){
        const obj = (response.data);
        setObjWorks(obj)
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

          <div className="works" data-simplebar-auto-hide="false">
              
              <div id="worksContent">
                {objWorks.map((item,i) => (
                  <div className="item" key={'work-'+i}>
                    <div className="container">
                      <figure className="thumb">
                          <img className="web" src={publicAsset(item.thumbnail.web)} alt="portfolio thumbnail" />
                          <img className="mobile" src={publicAsset(item.thumbnail.mobile)} alt="portfolio thumbnail" />
                          <img className="tablet" src={publicAsset(item.thumbnail.tablet)} alt="portfolio thumbnail" />
                      </figure>
                      <div className="content">
                        <h3 className="title" dangerouslySetInnerHTML={{__html:item.title}}></h3>
                        <small className="description" dangerouslySetInnerHTML={{__html:item.description}}></small>
                        <ul className="listing">
                          {item.tags.map((tag,index) => (
                            <li className="item" key={index}>{tag}</li>
                          ))}
                        </ul>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>

      </div>

    </section>
  )
}
