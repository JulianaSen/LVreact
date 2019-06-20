import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
//import FilterMenu from '../FilterMenu/filterMenu';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import  '../../css/style.css';
import '../../css/normalize.css';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/actionsData';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';

class App extends Component{
    
    componentDidMount(){
        // if (this.props.loading == true)
        // {
        this.props.dispatch(fetchData());
        // }
    }

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
    budget: state.forms.budget,
    userName: state.forms.userName,
    email: state.forms.email,
    password: state.forms.password
});
  
export default connect(mapStateToProps)(App);