import React, {useState,useEffect} from 'react'

import {useParams} from 'react-router-dom'

import api from '../../api'

import './assets/scss/components/_post.scss'

export default function Post() {

    let [title,setTitle] = useState(String)
    let [date,setDate] = useState(String)
    let [content,setContent] = useState(String)
    const { slug } = useParams()

    useEffect(() => {
        getPost() 
    },[])

    function getPost() {
        //document.getElementById('checkFunFacts').click()
        let URL = 'posts?slug='+slug
        api.get(URL)
        .then(function(response){
            let obj = response.data
            setTitle(obj[0].title.rendered)
            setContent(obj[0].content.rendered)
            let date = new Date(obj[0].date_gmt)
            date = date.toUTCString()
            date = date.split(' GMT')[0]
            setDate(date.substring(0, date.length - 9))
        })
        .finally(function(){
            //document.getElementById('checkFunFacts').checked = false
        })
    }
    return (
        <section id="post" className="page-section">
            
            <h1 className="title">
                {title}
            </h1>

            <time className="post-date" datetime={date}>
                {date}
            </time>

            <simplebar data-simplebar-auto-hide="false" className="content content-post">

                <div dangerouslySetInnerHTML={{__html:content}}></div>
        
            </simplebar>

        </section>
    )
}