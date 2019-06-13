import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import FilterMenu from '../FilterMenu/filterMenu';
import Navbar from '../Navbar/Navbar'
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




//                 <Switch>
//                     <Route exact path='/about' component={About} />
//                     <Route exact path='/sign_in' component={SignIn} />
//                     <Route exact path='/sig_up' component={SignUp}/>
//                     <FilterMenu />
//                 </Switch>

