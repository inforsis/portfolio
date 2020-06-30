import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>          
            <Route path="/home" exact component={Home}></Route>   
            <Route path="/about" exact component={About}></Route>   
        </Switch>
    )
}