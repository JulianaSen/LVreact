import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Forms/Btn';
import Input from '../Forms/Input';
import Navbar from "../Navbar/Navbar";
import { tsThisType } from '@babel/types';

class SignIn extends Component{
    state = {
        email: "",
        password: ""
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.email.value);
    };

    render(){
        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                    <p className = "createText">Sign in:</p>
                    <form className="rgt-form" onSubmit={this.handleSubmit}>
                        <Input
                            //csform="rgt-form"
                            csdiv="input-rgt"
                            tp="email"
                            nm="email"
                            pdr="email"
                            value={this.state.email}
                        />

                        <Input
                            //csform="rgt-form"
                            csdiv="input-rgt"
                            tp="password"
                            nm="password"
                            pdr="password"
                            value={this.state.password}
                        />

                        <Btn
                            //csform="rgt-form"
                            csdiv="input-rgt"
                            idt="btn"
                            tp="submit"
                            vl="Submit"
                        />
                    </form>

                    <p className="changeLink">Don't have an account?</p>
                    <Link className="changeLink" to='/sign_up'>Create one!</Link>
                </section>
            </div>
        )
    }
}

export default SignIn;