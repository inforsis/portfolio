import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import loadMenu from './js/main.js';  

class Menu extends React.Component {
    render() {
        return (
            <nav id="mainMenu" className="main-menu"></nav>
        )
    }
}

export default Menu;
