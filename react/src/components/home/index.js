import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/main.scss';
import bG from './img/bg-home.jpg';

const loadCoverArea = () => {
    axios.get('./json/cover.json')
    .then(function(response){
        let obj = (response.data);
        let cover = document.getElementById('coverArea');

        let greeting = document.createElement('SPAN');
        greeting.innerHTML = obj[0].greeting;
        cover.appendChild(greeting);
        
        let me = document.createElement('H2');
        me.innerHTML = obj[0].me;
        cover.appendChild(me);

        let profissional = document.createElement('H1');
        profissional.innerHTML = obj[0].profissional;
        cover.appendChild(profissional);

        let slug = document.createElement('SMALL');
        slug.innerHTML = obj[0].slug;
        cover.appendChild(slug);
    })
}

class Home extends React.Component {
    componentDidMount () {
        loadCoverArea();
    }
    render() {
        return (
            <section id="home" className="page-section">
                <div id="coverArea" className="cover-area"></div>
            </section>
        )
    }
}

export default Home;