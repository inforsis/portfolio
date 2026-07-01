import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import api from '../../api'
import type { MenuPage } from '../../types/api'

import './assets/scss/objects/_main-menu.scss'
import './assets/scss/components/_main-menu.scss'

type MenuItem = {
  id: string;
  title: string;
  icon: string;
  slug: string;
};

export default function Menu() {
  const [menu,setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    loadMenu()
  }, [])

  function loadMenu() {
    const URL = 'pages';
    api.get<MenuPage[]>(URL)
    .then(function(response){
      const obj = (response.data);
      //alert (obj)
      const itemMenu: MenuItem[] = []
      for (const i in obj) { 
                  
        const slug = '/'+obj[i].slug;
        const title = obj[i].slug;
        let icon = '';
        const id = i;
        
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
