import React, {Component} from 'react';
import sleep from '../../img/sleep.svg';
import food from '../../img/food.svg';
import cinema from '../../img/cinema.svg';

import {Link} from 'react-router-dom';

export default class MainIcons extends React.Component {
    render() {
        return (
            <div className="icons">
                <Link className="images" to="/about">
                    <img src={sleep} alt="Sleep" />
                </Link>
                <Link className="images"  to="/about">
                    <img src={food} alt="Eat" />
                </Link>
                <Link className="images"  to="/about"> 
                    <img src={cinema} alt="Hang_out" />
                </Link>
            </div>
        )
    }
}