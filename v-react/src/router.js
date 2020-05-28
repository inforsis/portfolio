import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>          
            </Switch>
        </BrowserRouter> 
    )
}