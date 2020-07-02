import React, {useState,useEffect} from 'react'
import {Link,useRouteMatch} from 'react-router-dom'

import api from '../../api'

import './assets/scss/components/_article.scss'

export default function Blog() {
  let [article,setArticle] = useState([])

  useEffect(() => {
    loadBlogPosts() 
  },[])

  const { url } = useRouteMatch()

  function loadBlogPosts() {
    //document.getElementById('checkFunFacts').click()
    const URI = 'posts/'
    api.get(URI)
    .then(function(response){
      var obj = (response.data)
      for (var i = 0; i < obj.length; i++) {

        let link = obj[i].link
        let title = obj[i].title.rendered

        let date = obj[i].date.split('T')[0]

        let slug = url+'/'+obj[i].slug
        
        setArticle(setArticle => [...article,{'title': title, 'link':link, 'data':date, 'slug': slug}])
      }
    })
    .finally(function(){
      //document.getElementById('checkFunFacts').checked = false
    })
  }
  return (
    <section id="blog" class="page-section">
            
      <h1 className="title">
          Recent articles
      </h1>

      <simplebar data-simplebar-auto-hide="false" className="content article-list">

          <div id="listingPosts">
            {article.map((item) => (              
              <div className="article">
          
                  <h2 className="title">
                      <Link to={item.slug} className="link">{item.title}</Link>
                  </h2>

                  <time className="date" datetime="">{item.data}</time>
                      
              </div>
            ))}
          </div>
  
      </simplebar>

    </section>
  )
}

