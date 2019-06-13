import React, {Component} from 'react';
import favicon from '../../img/around.png';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render() {

        const {links} = this.props;
        return (
            <div>
                <header className="header">
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
        </div>
        )
    }
}


export default Navbar;