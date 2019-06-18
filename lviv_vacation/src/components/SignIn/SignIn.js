import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import Btn from '../Forms/Btn';
//import Input from '../Forms/Input';
import Navbar from "../Navbar/Navbar";
//import { tsThisType } from '@babel/types';

class SignIn extends Component{
    state = {
        email: "",
        password: ""
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState ({
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });
    };

    render(){
        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                    <p className = "createText">Sign in:</p>
                    <form className="rgt-form" onSubmit={this.handleSubmit}>
                        <div className="input-rgt">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="e-mail" 
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <br />
                            <input id="btn" type="submit" value="Submit" />
                        </div>
                    </form>

                    <p className="changeLink">Don't have an account?</p>
                    <Link className="changeLink" to='/sign_up'>Create one!</Link>
                </section>
            </div>
        )
    }
}

export default SignIn;