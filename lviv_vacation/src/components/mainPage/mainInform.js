import React, {Component} from 'react';

const initialState = {
    budget: "",
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

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    };

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
                            onChange={this.handleChange}
                        />
                        <div>
                            {this.state.error}
                        </div>
                        <button className="btn">
                            {this.props.submit}
                        </button>
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

export default MainContent;