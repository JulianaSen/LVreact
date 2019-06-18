import React, {Component} from 'react';
//import Btn from '../Forms/Btn';
//import Input from '../Forms/Input';
import Navbar from  "../Navbar/Navbar";

const initialState = {
    userName: "",
    email: "",
    password: "",
    confirm: "", 
    error: ""
}

class SignUp extends Component{
    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    }

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState ({
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });
    }

    validate = () => {
        let error = "";
        if(this.state.password != this.state.confirm) {
            error = "Passwords aren't equal!";
        }

        if(!this.state.userName 
            || !this.state.email 
            || !this.state.password 
            || !this.state.confirm) {
            error = "Fields can't be empty!";
        }

        if(error) {
            this.setState({ error });
            return false;
        }

        return true;
    }



    render(){
        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                    <p className = "createText">Create new account:</p>
                    <form className="rgt-form" onSubmit={this.handleSubmit}>
                        <div className="input-rgt">
                            <input 
                                type="text" 
                                name="userName" 
                                placeholder="username" 
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="email" 
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
                            <input 
                                type="password" 
                                name="confirm" 
                                placeholder="repeat password" 
                                value={this.state.confirm}
                                onChange={this.handleChange}
                            />
                            <br />
                            <div style={{fontSize: "30px", backgroundColor: "white", borderRadius: "5px", marginTop: "5px"}}>
                                {this.state.error}
                            </div>
                            <input id ="btn" type="submit" value="Register" />
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignUp;