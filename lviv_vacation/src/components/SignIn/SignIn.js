import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Forms/Btn';
import Input from '../Forms/Input';
import Navbar from "../Navbar/Navbar";

class SignIn extends Component{
    render(){

        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                <p className = "createText">Sign in:</p>
                        <Input
                             csform="rgt-form"
                             csdiv="input-rgt"
                             tp="email"
                             nm="email"
                             pdr="email"
                        />

                        <Input
                             csform="rgt-form"
                             csdiv="input-rgt"
                             tp="password"
                             nm="password"
                             pdr="password"
                        />

                        <Btn
                             csform="rgt-form"
                             csdiv="input-rgt"
                             idt="btn"
                             tp="submit"
                             vl="Submit"
                        />

                        <p className="changeLink">Don't have an account?</p>
                        <Link className="changeLink" to='/sign_up'>Create one!</Link>
                </section>
            </div>
        )
    }
}

export default SignIn;

