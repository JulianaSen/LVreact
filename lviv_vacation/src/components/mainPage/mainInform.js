import React, {Component} from 'react';
import { connect } from 'react-redux';


const initialState = {
    error: ""
}

class MainContent extends Component {
    state = initialState;
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const isValid = this.validate();
    //     if(isValid) {
    //         this.setState(initialState);
    //         console.log(`validate`);
    //     }
    // };

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState ({ 
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });
        console.log("handleChange " + event.target.value);
    }

    render() {
        return (
            <div className="choice">
                <span className="textBudget"> 
                    {this.props.enter}
                </span> 
                <div className="bdg-ipt">
                    <form className="budget_form" onSubmit={this.props.setBudget}> 
                        <input 
                            className="input_budget" 
                            type="text"
                            name="budget" 
                            placeholder="100$" 
                            value={this.props.budget}
                            onChange={this.handleChange}
                            //onChange={this.props.setBudget}
                        />
                        <button className="btn" >
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
            console.log("value: " + event.target.value);
            if(validate(event.target.value)) {
                dispatch({type: 'SET_BUDGET', budget: event.target.value});
                console.log('ok');
            } else console.log('no');
        } 
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);