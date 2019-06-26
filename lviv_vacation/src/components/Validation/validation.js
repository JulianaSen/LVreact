const validate = values => {
    const errors = {}
  
    if (!values.email) {
      errors.email = "Email can't be blank!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
  
    if (!values.password) {
      errors.password = "Password can't be blank!";
    } 

    if (!values.userName) {
        errors.userName = "Name can't be blank!";
    } 

    if (!values.confirm) {
        errors.confirm = "Password can't be blank!";
    } 

    if(values.password !== values.confirm) {
        errors.confirm = "Passwords must be equal!";
    }

    if(!values.budget) {
        errors.budget = "Budget can't be blank!";
    } else if(isNaN(values.budget)) {
        errors.budget = "Budget must be a number!";
    }
    
    return errors;
}

export default validate;