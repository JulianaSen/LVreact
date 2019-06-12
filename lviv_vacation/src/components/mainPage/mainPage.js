import React, {Component} from 'react';
import VideoContainer from '../video/video';
import MainContent from '../mainPage/mainInform';
import MainIcons from '../mainPage/icons';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class MainBlock extends React.Component {
    render() {
        return (
            <section className="choice"> 
                <VideoContainer />

                <MainContent enter="Enter your budget for one day:"
                    submit="Submit"
                    activity="Choose your activity:" />

<Router>
                <MainIcons />
                </Router>
            </section>  
        )
    }
}