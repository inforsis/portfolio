import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './scss/main.scss';
import profilePic from './img/jadson_moreira.jpg';
import Menu from './../mainMenu/index.js'; 

class Side extends React.Component {
    render() {
        return (
            <aside className="side">
                <figure className="profile-pic">
                    <span className="pic-rounded">
                        <img src={profilePic} className="img" alt="foto perfil" />                
                    </span>
                </figure>
                <Menu/>
                <span className="credits">
                    Done with <i className="material-icons">favorite</i> and <i className="material-icons">audiotrack</i>
                </span>
            </aside>
        );
    }
}  

//exportando o componente
export default Side;