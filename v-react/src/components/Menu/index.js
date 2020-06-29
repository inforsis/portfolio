import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import api from '../../api'

import './assets/scss/objects/_main-menu.scss'
import './assets/scss/components/_main-menu.scss'

export default function Menu() {
  let [menu,setMenu] = useState([])

  useEffect(() => {
    loadMenu()
  })

  function loadMenu() {
    const URL = 'pages?filter[orderby]=date&order=asc';
    api.get(URL)
    .then(function(response){
      let obj = (response.data);
      //alert (obj)
      let itemMenu = []
      for (let i in obj) { 
                  
        let slug = '/'+obj[i].slug;
        let title = obj[i].slug;
        let icon;
        let id = i;
        
        switch (obj[i].slug) {
          case 'home':
            icon = 'home';
            break;
          case 'about':
            icon = 'person';
            break;
          case 'works':
            icon = 'work';
            break;
          case 'articles':
            icon = 'public';
            break;
          case 'contact':
            icon = 'email';
            break;
          default:
            break;
        }
        itemMenu.push({'id': id, 'title': title, 'icon': icon, 'slug': slug})
      }
      setMenu(itemMenu);
    })
  }

  return (
    <nav id="mainMenu" className="main-menu">
      {menu.map((item) => (
        <Link key={item.id} to={item.slug} className="main-menu-item" id={item.title+"-menu"} data-title={item.title}>
          <i className="material-icons">{item.icon}</i>
        </Link>
      ))}
    </nav>  
  )
}
