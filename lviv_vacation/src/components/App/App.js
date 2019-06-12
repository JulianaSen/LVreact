
import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import  '../../css/style.css';
import '../../css/normalize.css';


export default class App extends Component{
    render() {
        return (
            <Router>
                <Route path="/" component={MainBlock} exact />
                <Route path="/about" component={AboutBlock} />
             </Router>
            
        );
      }
}