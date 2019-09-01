import React from 'react';
import ReactDOM from 'react-dom';

import styles from './scss/main.scss';

class funFactsIcon extends React.Component {
    render() {
        return (
            <label className="fun-facts-icon" htmlFor="checkFunFacts" data-title="Fun Fact about me"></label>
        )
    }
}

export default funFactsIcon;