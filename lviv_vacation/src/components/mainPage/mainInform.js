import React from 'react';
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm, formValueSelector, formValues, getFormValues } from 'redux-form'; 
import { connect } from 'react-redux';

let MainContent = props => {
    console.log(props.budget);
    const { handleSubmit, submitting } = props;
    const submit = (values) => {return values;}
    return (
        <div className="choice_text">
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
MainContent = connect(
    state => ({
        budget:  selector(state, 'budget')
    })
)(MainContent)

export default MainContent;