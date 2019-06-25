import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setBudgetRequest } from '../../actions/actionsData';
import axios from 'axios'; 
import { thisTypeAnnotation } from '@babel/types';
import { store } from '../../index';
import { SET_BUDGET } from '../../actions/actionsForm';

const initialState = {
    error: ""
}

class MainContent extends Component {
    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        
        var data = {
            budget: this.props.budget
        }

        axios.post("http://localhost:3001/op/budget", data )
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    // handleChange = event => {
    //     const isCheckBox = event.target.type === "checkbox";
    //     this.setState ({ 
    //         [event.target.name]: isCheckBox
    //         ? event.target.checked
    //         : event.target.value
    //     });
    //     console.log("handleChange " + event.target.value);
    // }

    render() {
        return (
            <div className="choice">
                <span className="textBudget"> 
                    {this.props.enter}
                </span> 
                <div className="bdg-ipt">
                    <form className="budget_form" onSubmit={this.handleSubmit}> 
                        <input 
                            className="input_budget" 
                            type="text"
                            name="budget" 
                            placeholder="100$" 
                            value={this.state.budget}
                            //onChange={this.handleChange}
                            onChange={this.props.setBudget}
                        />
                        <button className="btn" type="submit">
                            {this.props.submit}
                        </button>
                        <div style={{ paddingLeft: "25px" }}>
                            {this.state.error}
                        </div>
                    </form>
                </div>
                <br />
                <span className="textAct"> 
                    {this.props.activity}
                </span>
            </div>
        )
    }
}

const validate = budget => {
    let error = "";

    if(isNaN(budget)) {
        error = "Budget must be a number!";
    } else if(!budget) {
        error = "Budget can't be blank!";
    }

    if(error) {
        //this.setState({ error });
        console.log(error);
        return false;
    } 
    
    return true;
};

const mapStateToProps = state => {
    return {
        budget: state.forms.budget
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBudget: (event) => {
            event.preventDefault();
            if(validate(event.target.value)) {
                dispatch({type: 'SET_BUDGET', budget: event.target.value});
                console.log('ok');
            } else console.log('no');
        } 
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);