import React, {Component} from 'react';
import { connect } from 'react-redux';


class MainContent extends Component {
    
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

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
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
                    <form className="budget_form">
                        <input className="input_budget" type="text" name="Budget" placeholder="100$" />
                        <button className="btn" >
                    <form className="budget_form" onSubmit={this.handleSubmit}>
                        <input 
                            className="input_budget" 
                            type="text"
                            name="budget" 
                            placeholder="100$" 
                            value={this.state.budget}
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

// const mapStateToProps = state => {
//     return{
//         loading: state.data.loading
//     };
//   };

// const mapDispatchToProps = dispatch => {
//     return{
//         handleLoading: (evt) => {
//             evt.preventDefault();
//             dispatch({type: 'FETCH_DATA_BEGIN', loading: true})
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContent;