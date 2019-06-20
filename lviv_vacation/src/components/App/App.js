import React, {Component, PropTypes} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import FilterMenu from '../FilterMenu/filterMenu';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import  '../../css/style.css';
import '../../css/normalize.css';
import { connect } from 'react-redux';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';
import { fetchData } from '../../actions/actionsData';

class App extends Component{

        
    render() {
        return (
            <>  
                <Route exact path="/" component={MainBlock}  />
                <Route exact path="/about" component={AboutBlock} />
                <Route exact path='/sign_in' component={SignIn} />
                <Route exact path='/sign_up' component={SignUp}/>
                <Route exact path='/hotels' component={CatalogWithFilter}/>
            </>
        );
      }
}


const mapStateToProps = state => ({
    items: state.data.items,
    loading: state.data.loading,
    error: state.data.error,
    route: state.data.route
  });
  
  export default connect(mapStateToProps)(App);


