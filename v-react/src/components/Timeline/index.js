import React, { useState, useEffect } from 'react'

import api from '../../api'

import './assets/scss/objects/_content-side.scss';
import './assets/scss/components/_timeline.scss';

export default function Timeline() {

  let [objEvents,setObjEvents] = useState([])
  let [eventos,setEvent] = useState([])
  let [year,setYear] = useState(Number)

  useEffect(() => {
    loadTimeLine()    
  },[])

  useEffect(()=> {
    if (objEvents.length > 0) {
      setEvent(objEvents[0].eventos)
      setYear(objEvents[0].year)
    }
  },[objEvents])

  function loadTimeLine() {
    const URL = 'timeline?per_page=99&filter[orderby]=date&order=desc';
    api.get(URL)
    .then(function(response){
      var obj = (response.data)
      //primeiro valor do objeto para o ano atual
      var currentYear = obj[0].date.split('-')
      currentYear = parseInt(currentYear[0])
      //inicia o objeto de eventos e o array de evento
      var events = {}
      var event = []
      for (var i in obj) {
        //pega o ano
        var year = obj[i].date.split('-');
        year = parseInt(year[0])
        //se o ano atual for igual ao ano do item
        if (year === currentYear) {
          //adiciona o item ao array de evento
          event.push(obj[i].title.rendered)
        }  
        if (year !== currentYear) {
          //atualiza o objeto de eventos
          events.year = currentYear
          events.eventos = event
          events.id = i
          //adiciona o objeto de evento ao array principal
          setObjEvents(objEvents => [...objEvents,events])
          //limpa os objetos e array
          events = {}
          event = []
          //starta os valores 
          events.year = year
          events.eventos = event.push(obj[i].title.rendered)
        }  
        //atribui o novo valor para o ano atual
        currentYear = year       
      }
    })      
  }
  function changeTimeLine(indexYear) {
     setEvent(objEvents[indexYear].eventos)
     setYear(objEvents[indexYear].year)
  }

  return (
    
    <div className="content-side timeline">
     
      <dl id="timeLine" className="timeline-information">
        <dt className="year">
          <span dangerouslySetInnerHTML={{__html:year}}></span>
        </dt>
        {eventos.map((item) => (
          <dd className="item" dangerouslySetInnerHTML={{__html:eventos}}></dd>
        ))}
      </dl>

      <div id="timeLinePagination" className="timeline-pagination">
          {objEvents.map((item,index) =>
          {
            var checkItem = (index === 0) ? true : false
            return (
              <label key={item.id} className="item">
                <input type="radio" name="timeline" defaultChecked={checkItem} value={index} autoComplete="off" onChange={() => changeTimeLine(index)}/>
                <i className="bullet"></i>
                <span>{item.year}</span>
              </label>
            )
          })}
      </div>

    </div>
  )
}
