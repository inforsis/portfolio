import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './scss/main.scss';
import loading from './img/loading.svg';

const randomFunFacts = () => {
    axios.get('./json/funfacts.json')
    .then(function(response){
        var obj = (response.data);
        var id = Math.floor((Math.random() * obj.length) + 1);
        var factsHTML = obj[id].fact;
        document.getElementById('funFacts').innerHTML = factsHTML;
        document.getElementById('funFactID').innerHTML = id;
    })
}

class FunFacts extends React.Component {
    componentDidMount() {
        randomFunFacts();  
    } 
    render() {
        return (
            <label id="funFactsCard" className="fun-facts-card animated" htmlFor="checkFunFacts" title="Click to close">
        
                <div className="content">

                    <img src={loading} alt=""/>

                    <h6 className="title">
                        some fun fact about me #<span id="funFactID"></span>
                    </h6>
                    
                    <p id="funFacts"></p>

                </div>

            </label>
        );
    }
}  

//exportando o componente
export default FunFacts;