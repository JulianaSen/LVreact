import React from 'react';
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm, formValueSelector } from 'redux-form'; 
import { connect } from 'react-redux';

let MainContent = props => {
    const { handleSubmit, submitting } = props;
    const submit = (values) => {return values;}
    return (
        <div className="choice">
        <span className="textBudget"> 
            Enter your budget for one day:
        </span> 
        <div className="bdg-ipt">
            <form className="budget_form" onSubmit={handleSubmit(submit)}> 
                    <Field 
                    className="input_budget"
                    name="budget" 
                    type="text" 
                    placeholder="100$" 
                    component={renderField} />
                <button className="btn" type="submit" disabled={submitting} >
                    Submit
                </button>
            </form>
        </div>
        <br />
        <span className="textAct"> 
            Choose your activity:
        </span>
    </div>
    )
  }

MainContent = reduxForm({
    form: 'mainContent', 
    validate
})(MainContent)

const selector = formValueSelector('mainContent');
MainContent = connect(state => {
    const budget = selector(state, 'budget');
    return budget;
})(MainContent)

export default MainContent;