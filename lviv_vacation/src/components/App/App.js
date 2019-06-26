import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutBlock from '../about/about';
import MainBlock from '../mainPage/mainPage';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import  '../../css/style.css';
import '../../css/normalize.css';
import { connect } from 'react-redux';
import CatalogWithFilter from '../CatalogWithFilter/CatalogWithFilter';

import { history } from '../../helpers/history';
import { alertActions } from '../../actions/alertActions';
import { PrivateRoute } from '../../components/PrivateRoute';

import { HomePage } from '../HomePage/HomePage'
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../RegisterPage/RegisterPage';

class App extends Component{

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
                <div >
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route exact path="/about" component={AboutBlock} />
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/register' component={RegisterPage}/>
                            <Route exact path='/hotels' component={CatalogWithFilter}/>
                        </div>
                    </Router>
                </div>
            // <>  
            //     <Route exact path="/" component={MainBlock}  />
            //     <Route exact path="/about" component={AboutBlock} />
            //     <Route exact path='/sign_in' component={SignIn} />
            //     <Route exact path='/sign_up' component={SignUp}/>
            //     <Route exact path='/hotels' component={CatalogWithFilter}/>
            // </>
        );
    }
}

const mapStateToProps = state => ({
    items: state.data.items,
    loading: state.data.loading,
    error: state.data.error
});


// function mapStateToProps(state) {
//     const { alert } = state;
//     return {
//         alert
//     };
// }

export default connect(mapStateToProps)(App);