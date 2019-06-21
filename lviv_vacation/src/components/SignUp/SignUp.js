import React, {Component} from 'react';
import Navbar from  "../Navbar/Navbar";
import { connect } from 'react-redux';

const initialState = {
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

    validate = (event) => {
        let error = "";
        if(this.props.password !== document.getElementById('confirm').value) {
            error = "Passwords aren't equal!";
        }

        if(!this.props.userName 
            || !this.props.email 
            || !this.props.password 
            || document.getElementById('confirm').value == '') {
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
                    <form className="rgt-form" >
                        <div className="input-rgt">
                            <input 
                                id="name"
                                type="text" 
                                name="userName" 
                                placeholder="username" 
                                value={this.props.userName}
                                onChange={this.props.setName}
                            />
                            <br />
                            <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder="email" 
                                value={this.props.email}
                                onChange={this.props.setEmail}
                            />
                            <br />
                            <input 
                                id="password"
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                value={this.props.password}
                                onChange={this.props.setPassword}
                            />
                            <br />
                            <input 
                                id="confirm"
                                type="password" 
                                name="confirm" 
                                placeholder="repeat password" 
                                defaultValue={this.state.confirm}
                            />
                            <br /> <br />
                            <button id="btn" onClick={this.handleSubmit}>
                                Register
                            </button>
                            <div style={{fontSize: "30px", backgroundColor: "white", borderRadius: "5px", marginTop: "45px", paddingLeft: "70px"}}>
                                {this.state.error}
                            </div>
                        </div>
                    </form>

                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.forms.userName,
        email: state.forms.email,
        password: state.forms.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName: (event) => {
            event.preventDefault();
            dispatch({ type: 'SET_USERNAME', userName: event.target.value })
        },
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);