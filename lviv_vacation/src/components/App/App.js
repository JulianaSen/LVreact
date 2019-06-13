import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import FilterMenu from '../FilterMenu/filterMenu';
import SignUp from '../SignIn';
import  '../../css/style.css';
import '../../css/normalize.css';


export default class App extends Component{
    render() {
        return (
            <>
                <Route exact path="/" component={MainBlock}  />
                <Route exact path="/about" component={AboutBlock} />
                <Route exact path='/sign_in' component={SignIn} />
//               <Route exact path='/sign_up' component={SignUp}/>
            </>
        );
      }
}




//                 <Switch>
//                     
//                     <Route exact path='/sign_in' component={SignIn} />
//                     <Route exact path='/sig_up' component={SignUp}/>
//                     <FilterMenu />
//                 </Switch>

