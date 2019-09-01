import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './scss/main.scss';
import Side from '../side/index.js';
import Home from '../home/index.js';
import FunFacts from '../funfacts/index.js';
import FunFactsIcon from '../funFactsIcon/index.js';

class Site extends React.Component {
    render() {
        return (
            <span className="container-site">
                <input type="checkbox" autoComplete="off" className="func-facts-check d-none" id="checkFunFacts"/>
                <Side/>
                <main className="main-container animated">
                    <Home/> 
                    <FunFactsIcon/>              
                </main>
                <FunFacts/>
            </span>
        );
    }
}  

//exportando o componente
export default Site;