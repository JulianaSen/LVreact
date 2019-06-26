import React from 'react';
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm } from 'redux-form'; 

const MainContent = props => {
    const { handleSubmit, submitting } = props;
    const submit = (values) => console.log(values);
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

export default reduxForm({
    form: 'mainContent', 
    validate
})(MainContent)