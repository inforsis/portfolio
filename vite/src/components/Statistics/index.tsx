import React, {useState,useEffect} from 'react'

import './assets/scss/components/_statistics.scss'
import api from '../../api'
import type { Statistic } from '../../types/api'

//import { CountUp } from './assets/js/countUp.min.js';

export default function Statistics() {
  const [objStatistics,setStatistics] = useState<Statistic[]>([])
  useEffect(() => {
    loadStatistics()
  },[])
  function loadStatistics() {
    const URL = 'statistics';
    api.get<Statistic[]>(URL)
    .then(function(response){
      setStatistics(response.data)
    })
  }
  return (
    <ul id="statistics" className="statistics">
      {objStatistics.map((item, index) => (
        <li className="item" key={`statistic-${index}`}>
          <div className="content">
            <i className="icon material-icons" dangerouslySetInnerHTML={{__html:item.icon}}></i>
            <span className="number">+<span id="workCount1" dangerouslySetInnerHTML={{__html:item.timer}}></span></span>
            <small className="text" dangerouslySetInnerHTML={{__html:item.title}}></small>
          </div>
        </li>
      ))}
    </ul>
  )
}
