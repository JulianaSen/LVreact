import React, {Component} from 'react';
import Btn from '../Forms/Btn';
import Input from '../Forms/Input';
import Navbar from  "../Navbar/Navbar";

class SignUp extends Component{
    render(){

        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                <p className = "createText">Create new account:</p>
                <form className="rgt-form">
                        <Input
                             //csform="rgt-form"
                             csdiv="input-rgt"
                             tp="text"
                             nm="username"
                             pdr="username"
                        />

                        <Input
                             //csform="rgt-form"
                             csdiv="input-rgt"
                             tp="email"
                             nm="email"
                             pdr="email"
                        />

                        <Input
                             //csform="rgt-form"
                             csdiv="input-rgt"
                             tp="password"
                             nm="password"
                             pdr="password"
                        />

                        <Input
                             //csform="rgt-form"
                             csdiv="input-rgt"
                             tp="password"
                             nm="password"
                             pdr="confirm password"
                        />

                        <Btn
                            // csform="rgt-form"
                             csdiv="input-rgt"
                             idt="btn"
                             tp="submit"
                             vl="Register"
                        />
</form>
                </section>
            </div>
        )
    }
}

export default SignUp;