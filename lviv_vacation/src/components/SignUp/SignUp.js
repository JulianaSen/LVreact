import React from 'react';
import Navbar from "../Navbar/Navbar";
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm } from 'redux-form';

const SignUp = props => {
    const { handleSubmit, submitting } = props;
    const submit = (values) => console.log(values);
    return (
        <div className="rst">
        <Navbar />
        <section className="rgt">
            <p className = "createText">Create new account:</p>
            <form className="rgt-form" onSubmit={handleSubmit(submit)}>
                <div className="input-rgt" >
                    <Field name="userName" 
                           type="text" 
                           placeholder="Name"
                           component={renderField} />
                    <Field name="email" 
                           type="email" 
                           placeholder="Email" 
                           component={renderField} />
                    <Field name="password" 
                           type="password" 
                           placeholder="Password"
                           component={renderField} />
                    <Field name="confirm" 
                           type="password" 
                           placeholder="Confirm password"
                           component={renderField} />
                    <br /><br />
                    <button id="btn" type="submit" disabled={submitting}>
                        Sign up
                    </button>
                </div>
            </form>
        </section>
    </div>
    )
  }

export default reduxForm({
    form: 'signUp', 
    validate
})(SignUp)