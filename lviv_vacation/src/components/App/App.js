import React, {Component} from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import  '../../css/style.css';


class App extends Component{
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/sign_in' component={SignIn} />
                    <Route exact path='/sig_up' component={SignUp}/>
                    <FilterMenu />
                </Switch>
            </div>
        );
      }
}


export default App;