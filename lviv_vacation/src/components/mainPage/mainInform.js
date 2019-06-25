import React, {Component} from 'react';
import { connect } from 'react-redux';


const initialState = {
    error: ""
}

class MainContent extends Component {
    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            this.setState(initialState);
        }
        console.log(`validate`);
    };

    validate = () => {
        let error = "";
    
        if(isNaN(this.props.budget)) {
            error = "Budget must be a number!";
        } else if(!this.props.budget) {
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
                    <form className="budget_form"> 
                        <input 
                            id = "input" 
                            className="input_budget" 
                            type="text"
                            name="budget" 
                            placeholder="100$" 
                            value={this.props.budget}
                            onChange={this.props.setBudget}
                        />
                        <button className="btn" onClick={this.handleSubmit}>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);