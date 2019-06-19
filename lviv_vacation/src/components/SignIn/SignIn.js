import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { connect } from 'react-redux';

class SignIn extends Component{
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.props);
        console.log(`email ${this.props.email}`);
        console.log(`password ${this.props.password}`);
        console.log(`budget ${this.props.budget}`);
    };

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState ({
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });

        // console.log(this.state);
         //console.log(`email ${this.props.email}`);
        // console.log(`password ${this.props.password}`);
        // console.log(`target ${event.target.value}`);
    };

    render(){
        return (
            <div className="rst">
                <Navbar />
                <section className="rgt">
                    <p className = "createText">Sign in:</p>
                    <form className="rgt-form" >
                        <div className="input-rgt" >
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="email" 
                                value={this.props.email}
                                onChange={this.props.setEmail}
                                //onChange={this.handleChange}
                                onClick={this.props.setEmail}
                            />
                            <br />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                defaultValue={this.props.password}
                                onChange={this.props.setPassword}
                                //onChange={this.handleChange}
                               // onClick={this.props.setPassword}
                            />
                            <br /><br />
                            <button id="btn">
                                Submit
                            </button>
                            {/* <input id="btn" type="submit" value="Submit" onClick={this.props.setEmail}/> */}
                        </div>
                    </form>

                    <p className="changeLink">Don't have an account?</p>
                    <Link className="changeLink" to='/sign_up'>Create one!</Link>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.forms.email,
        password: state.forms.password,
        budget: state.forms.budget
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEmail: (event) => {
            event.preventDefault();
            dispatch({ type: 'SET_EMAIL', email: event.target.value })
        },
        setPassword: (event) => {
            event.preventDefault();
            dispatch({ type: 'SET_PASSWORD', password: event.target.value })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
//export default SignIn;