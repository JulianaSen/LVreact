import React, {Component} from 'react';
import { connect } from 'react-redux';
    
const initialState = {
    error: ""
}

class MainContent extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState ({
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
        console.log(this.props);
        console.log(`budget ${this.props.budget}`);
    };

    validate = () => {
        let error = "";
    
        if(isNaN(this.state.budget)) {
            error = "Budget must be a number!";
        } else if(!this.state.budget) {
            error = "Budget can't be blank!";
        }
    
        if(error) {
            this.setState({ error });
            return false;
        }
    
        return true;
    };

    render() {
        return (
            <div className="choice">
                <span className="textBudget"> 
                    {this.props.enter}
                </span> 
                <div className="bdg-ipt">
                    <form className="budget_form" onClick={this.props.setBudget}>
                         {/* onSubmit={this.handleSubmit}> */}
                        <input 
                            className="input_budget" 
                            type="text"
                            name="budget" 
                            placeholder="100$" 
                            value={this.props.budget}
                            onChange={this.handleChange}
                        />
                        <button className="btn">
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

const mapStateToProps = state => {
    return {
        budget: state.forms.budget
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBudget: (event) => {
            event.preventDefault();
            dispatch({type: 'SET_BUDGET', budget: event.target.value});
        }
        // clear: (event) => {
        //     event.preventDefault();
        //     dispatch({type: 'CLEAR'})
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

//export default MainContent;