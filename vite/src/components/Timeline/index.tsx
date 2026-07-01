import React, { useState, useEffect } from 'react'

import api from '../../api'
import type { TimelineEvent } from '../../types/api'

import './assets/scss/objects/_content-side.scss';
import './assets/scss/components/_timeline.scss';

type TimelineYear = {
  id: string;
  year: number;
  eventos: string[];
};

export default function Timeline() {

  const [objEvents,setObjEvents] = useState<TimelineYear[]>([])
  const [eventos,setEvent] = useState<string[]>([])
  const [year,setYear] = useState<number | null>(null)

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
    const URL = 'timeline';
    api.get<TimelineEvent[]>(URL)
    .then(function(response){
      const obj = (response.data)

      const eventsByYear = obj.reduce<TimelineYear[]>((timeline, item) => {
        const itemYear = Number.parseInt(item.date.split('-')[0], 10)
        const currentYear = timeline[timeline.length - 1]

        if (currentYear?.year === itemYear) {
          currentYear.eventos.push(item.title)
          return timeline
        }

        timeline.push({
          id: String(timeline.length),
          year: itemYear,
          eventos: [item.title],
        })

        return timeline
      }, [])

      setObjEvents(eventsByYear)
    })      
  }
  function changeTimeLine(indexYear: number) {
    const selectedYear = objEvents[indexYear]

    if (selectedYear) {
      setEvent(selectedYear.eventos)
      setYear(selectedYear.year)
      }
  }

  return (
    
    <div className="content-side timeline">
     
      <dl id="timeLine" className="timeline-information">
        <dt className="year">
          <span>{year}</span>
        </dt>
        {eventos.map((item,index) => (
          <dd className="item" key={index}  dangerouslySetInnerHTML={{__html:item}}></dd>
        ))}
      </dl>

      <div id="timeLinePagination" className="timeline-pagination">
          {objEvents.map((item,index) =>
          {
            const checkItem = (index === 0) ? true : false
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
