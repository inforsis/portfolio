import React, {useState,useEffect} from 'react'

import './assets/scss/components/_statistics.scss'
import api from '../../api'

//import { CountUp } from './assets/js/countUp.min.js';

export default function Statistics() {
  let [objStatistics,setStatistics] = useState([])
  useEffect(() => {
    loadStatistics()
  },[])
  function loadStatistics() {
    const URL = 'statistics?per_page=99&filter[orderby]=date&order=desc';
    api.get(URL)
    .then(function(response){
      var obj = (response.data);
      for (var i = 0; i < obj.length; i++) {

        let title = obj[i].title.rendered
        let timer = obj[i].content.rendered
        let icon = obj[i].excerpt.rendered
        
        setStatistics(objStatistics => [...objStatistics,{'title': title, 'timer':timer, 'icon':icon}])
      }
    })
  }
  return (
    <ul id="statistics" class="statistics">
      {objStatistics.map((item) => (
        <li className="item">
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
