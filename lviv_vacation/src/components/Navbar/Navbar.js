import React, {Component} from 'react';
import favicon from '../../img/around.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{
    render() {
        let header;
        if (this.props.loggedIn === true) {
            header = <header className="header">
                <ul className="navbar">
                    <li className="navbarLi">
                        <NavLink to='/'>
                            <img className="logo" src={favicon} alt="logo" />
                        </NavLink></li>
                    <div className="nav-cng">
                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/about'>
                                About 
                            </NavLink>         
                        </li>

                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/userPage'>
                                Basket
                            </NavLink>
                        </li>

                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/sign_in'>
                                Log out
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </header>
        } else {
            header = <header className="header">
                <ul className="navbar">
                    <li className="navbarLi">
                        <NavLink to='/'>
                            <img className="logo" src={favicon} alt="logo" />
                        </NavLink></li>
                    <div className="nav-cng">
                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/about'>
                                About 
                            </NavLink>
                        </li>

                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/sign_in'>
                                Sign In
                            </NavLink>
                        </li>

                        <li className="navbarLi">
                            <NavLink activeClassName="active" to='/sign_up'>
                                Sign Up
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </header>
        }
        return (
            <div>
                { header }
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return {
        loggedIn : state.authentication.loggedIn
    }
}

export default connect(mapStateToProps)(Navbar);