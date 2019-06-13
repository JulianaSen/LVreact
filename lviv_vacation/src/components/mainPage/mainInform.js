import React, {Component} from 'react';

export default class MainContent extends React.Component {
    render() {
        return (
            <div className="choice">
                <span className="textBudget"> 
                    {this.props.enter}
                </span> 
                <div className="bdg-ipt">
                    <form className="budget_form">
                        <input className="input_budget" type="text" name="Budget" placeholder="100$" />
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