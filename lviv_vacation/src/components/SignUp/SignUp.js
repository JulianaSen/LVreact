import React, {Component} from 'react';
import Navbar from  "../Navbar/Navbar";
import { connect } from 'react-redux';

const initialState = {
    confirm: "", 
    error: ""
}

class SignUp extends Component{
    state = initialState;

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if(isValid) {
    //         console.log(this.state);
    //         this.setState(initialState);
    //     }
    // }

    // handleChange = event => {
    //     const isCheckBox = event.target.type === "checkbox";
    //     this.setState ({
    //         [event.target.name]: isCheckBox
    //         ? event.target.checked
    //         : event.target.value
    //     });
    // }

    // validate = () => {
    //     let error = "";
    //     if(this.state.password !== this.state.confirm) {
    //         error = "Passwords aren't equal!";
    //     }

    //     if(!this.state.userName 
    //         || !this.state.email 
    //         || !this.state.password 
    //         || !this.state.confirm) {
    //         error = "Fields can't be empty!";
    //     }

    //     if(error) {
    //         this.setState({ error });
    //         return false;
    //     }

    //     return true;
    // }

    clearInputs = (event) => {
        event.preventDefault();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm').value = '';
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
                                //onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder="email" 
                                value={this.props.email}
                                onChange={this.props.setEmail}
                                //onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                id="password"
                                type="password" 
                                name="password" 
                                placeholder="password" 
                                value={this.props.password}
                                onChange={this.props.setPassword}
                                //onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                id="confirm"
                                type="password" 
                                name="confirm" 
                                placeholder="repeat password" 
                                defaultValue={this.state.confirm}
                                //onChange={this.handleChange}
                            />
                            <br /> <br />
                            <button id="btn" onClick={this.clearInputs}>
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

//export default SignUp;