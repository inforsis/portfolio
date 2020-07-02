import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Articles from './components/Blog'
import Post from './components/Post'
import Contact from './components/Contact'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>          
            <Route path="/home" exact component={Home}></Route>   
            <Route path="/about" exact component={About}></Route>   
            <Route path="/works" exact component={Works}></Route>   
            <Route path="/articles" exact component={Articles}></Route>   
            <Route path="/articles/:slug" exact component={Post}></Route>   
            <Route path="/contact" exact component={Contact}></Route>   
        </Switch>
    )
}