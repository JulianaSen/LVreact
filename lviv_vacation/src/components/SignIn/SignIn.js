import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import renderField from "../../components/Validation/renderField";
import validate from "../../components/Validation/validation";
import { Field, reduxForm } from 'redux-form';

const SignIn = props => {
    const { handleSubmit, submitting } = props;
    const submit = (values) => console.log(values);
    return (
        <div className="rst">
        <Navbar />
        <section className="rgt">
            <p className = "createText">Sign in:</p>
            <form className="rgt-form" onSubmit={handleSubmit(submit)}>
                <div className="input-rgt" >
                    <Field name="email" 
                           type="email" 
                           placeholder="Email" 
                           component={renderField} />
                    <Field name="password" 
                           type="password" 
                           placeholder="Password"
                           component={renderField} />
                    <br /><br />
                    <button id="btn" type="submit" disabled={submitting}>
                        Submit
                    </button>
                </div>
            </form>

            <p className="changeLink">Don't have an account?</p>
            <Link className="changeLink" to='/sign_up'>Create one!</Link>
        </section>
    </div>
    )
  }

export default reduxForm({
    form: 'signIn', 
    validate
})(SignIn)