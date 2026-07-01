import React, {useState,useEffect} from 'react'

import {useParams} from 'react-router-dom'

import api from '../../api'
import type { PostContent } from '../../types/api'

import './assets/scss/components/_post.scss'

export default function Post() {

    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [content,setContent] = useState('')
    const { slug } = useParams()

    useEffect(() => {
        if (!slug) {
            return
        }

        //document.getElementById('checkFunFacts').click()
        const URL = 'posts?slug='+slug
        api.get<PostContent[]>(URL)
        .then(function(response){
            const obj = response.data
            if (!obj[0]) {
                return
            }
            setTitle(obj[0].title)
            setContent(obj[0].content)
            const postDate = new Date(obj[0].dateGmt)
            let formattedDate = postDate.toUTCString()
            formattedDate = formattedDate.split(' GMT')[0]
            setDate(formattedDate.substring(0, formattedDate.length - 9))
        })
        .finally(function(){
            //document.getElementById('checkFunFacts').checked = false
        })
    },[slug])

    return (
        <section id="post" className="page-section">
            
            <h1 className="title">
                {title}
            </h1>

            <time className="post-date" dateTime={date}>
                {date}
            </time>

            <div data-simplebar-auto-hide="false" className="content content-post">

                <div dangerouslySetInnerHTML={{__html:content}}></div>
        
            </div>

        </section>
    )
}
